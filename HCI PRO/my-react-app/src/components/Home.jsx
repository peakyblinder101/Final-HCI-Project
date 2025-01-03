import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaRegClock } from 'react-icons/fa';
import dadi from '../assets/dadi.jpg';
import ScanInProgress from './ScanInProgress';  // Import ScanInProgress component

const Home = () => {
  const navigate = useNavigate();
  const [showScanContainer, setShowScanContainer] = useState(false);

  const handleCardClick = () => {
    navigate('/dietaryprofile');
  };

  const handleScanClick = () => {
    setShowScanContainer(true); // Show the scan container
  };

  const recentScans = [
    { productName: 'Peanuts', price: '$100.00', date: 'October 12, 2024', barcode: '#1234567890123' },
    { productName: 'Chips', price: '$50.00', date: 'October 14, 2024', barcode: '#9876543210987' },
    { productName: 'Apple', price: '$2.00', date: 'October 10, 2024', barcode: '#1122334455667' },
    { productName: 'Orange Juice', price: '$3.50', date: 'October 11, 2024', barcode: '#2233445566778' },
    { productName: 'Banana', price: '$1.00', date: 'October 9, 2024', barcode: '#3344556677889' },
    { productName: 'Milk', price: '$4.00', date: 'October 8, 2024', barcode: '#4455667788990' },
  ];

  return (
    <div className="home-page">
      {showScanContainer ? (
        <ScanInProgress /> // Show ScanInProgress component when button is clicked
      ) : (
        <>
          <div className="small-card-user-container" onClick={handleCardClick}>
            <img
              src={dadi}
              alt="User Avatar"
              className="user-avatar-small-card"
            />
            <div className="user-info-small-card">
              <p className="welcome-text-small-card">Welcome Back,</p>
              <p className="username-small-card">John Doe</p>
            </div>
          </div>

          <div className="scanner-container">
            <div className="scanner">
              <button className="scan-button" onClick={handleScanClick}>Start Scan</button>
            </div>
          </div>

          <div className="recent-scans-container">
            <h3 className="recent-scans-h3">
              <FaRegClock style={{ marginRight: '8px' }} /> Recent Scans
            </h3>
            <h3 className="product-info-h3">Product Info</h3>
            <div className="recent-scans">
              {recentScans.map((scan, index) => (
                <div key={index} className="scan-row">
                  <div className="scan-item">{scan.productName}</div>
                  <div className="scan-item">{scan.price}</div>
                  <div className="scan-item">{scan.date}</div>
                  <div className="scan-item">{scan.barcode}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
