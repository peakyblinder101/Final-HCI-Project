import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Quagga from 'quagga';
import '../styles/ScanInProgress.css';
import dadi from '../assets/dadi.jpg';

const ScanInProgress = () => {
  const navigate = useNavigate();
  const streamRef = useRef(null); // Reference to store the camera stream

  // Start the Quagga scanner and camera stream
  useEffect(() => {
    const startScanner = () => {
      console.log("Initializing Quagga...");

      // Initialize Quagga
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: '#scanner-container', // The ID of the DOM element to stream the camera into
            constraints: {
              facingMode: 'environment', // Use the back camera
            },
          },
          decoder: {
            readers: ['ean_reader'], // Only EAN-13 barcode reader
          },
        },
        (err) => {
          if (err) {
            console.log('Error initializing Quagga:', err);
            return;
          }
          console.log('Quagga initialized successfully!');
          Quagga.start(); // Start scanning
        }
      );
      
      // Get the stream and assign it to the streamRef
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          streamRef.current = stream; // Save stream to the ref
          const videoElement = document.querySelector('video');
          if (videoElement) {
            videoElement.srcObject = stream; // Attach the stream to a video element if needed
          }
        })
        .catch(err => {
          console.log('Error accessing camera:', err);
        });

      // Stop scanning after success and navigate
      Quagga.onDetected((data) => {
        const code = data.codeResult.code;
        console.log('Detected code:', code);

        // Stop Quagga (scanner and camera)
        console.log("Stopping Quagga...");
        Quagga.stop();

        // Manually stop the camera stream as well
        stopCameraStream();

        // Navigate to details page with barcode
        navigate(`/detailsScan/${code}`);
      });
    };

    // Initialize the scanner when the component mounts
    startScanner();

    // Cleanup function to stop Quagga and the camera stream on unmount
    return () => {
      console.log('Stopping Quagga on unmount...');
      Quagga.stop();
      stopCameraStream();
    };
  }, [navigate]);

  const stopCameraStream = () => {
    console.log("Attempting to stop camera stream...");
  
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
  
      if (tracks.length > 0) {
        console.log("Stopping all tracks...");
        tracks.forEach((track) => {
          console.log("Stopping track:", track);
          track.stop(); // Stop each track (video and audio)
        });
  
        // Explicitly clear the stream reference
        streamRef.current = null;
        console.log("Camera stream stopped and reference cleared.");
      } else {
        console.log("No tracks to stop.");
      }
  
      // Ensure the video element is cleared (in case it's still showing the stream)
      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.srcObject = null; // Clear the video element
        console.log("Video element cleared.");
      }
    } else {
      console.log("No camera stream to stop.");
    }
  
    // Attempt to revoke permissions explicitly
    try {
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          devices.forEach(device => {
            if (device.kind === 'videoinput') {
              // Stop all tracks related to the device if still active
              navigator.mediaDevices.getUserMedia({ video: { deviceId: device.deviceId } })
                .then((stream) => {
                  // This will trigger a fresh stream, stop all tracks, and clear them
                  const tracks = stream.getTracks();
                  tracks.forEach(track => {
                    console.log(`Stopping track: ${track.id}`);
                    track.stop();
                  });
                })
                .catch((err) => {
                  console.log(`Error stopping video permissions for device ${device.deviceId}:`, err);
                });
            }
          });
        })
        .catch((err) => {
          console.log('Error enumerating devices:', err);
        });
    } catch (err) {
      console.log('Error clearing camera permissions:', err);
    }
  };
  

  return (
    <div className="scan-in-progress">
      {/* Small Card User Container */}
      <div className="small-card-user-container">
        <img
          src={dadi} // Placeholder image, replace with actual user image
          alt="User Avatar"
          className="user-avatar-small-card"
        />
        <div className="user-info-small-card">
          <p className="welcome-text-small-card">Welcome Back,</p>
          <p className="username-small-card">John Doe</p>
        </div>
      </div>

      {/* Scan In Progress Container */}
      <div className="scan-in-progress-container">
        <div id="scanner-container" style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
};

export default ScanInProgress;
