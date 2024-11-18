import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Overlay({ setIsRightPanelActive }) {
  const navigate = useNavigate();  // Initialize navigate

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
    setIsRightPanelActive(false);  // Set state to show SignIn form
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
    setIsRightPanelActive(true);   // Set state to show SignUp form
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
    navigate('/');  // Navigate back to Landing Page
  };

  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
          <button
            className="ghost-btn"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
          {/* Back Button */}
          <button
            className="back-btn-landing"
            onClick={handleBackClick}
          >
            Back to Home
          </button>
        </div>

        <div className="overlay-panel overlay-right">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us, please login with your personal info</p>
          <button
            className="ghost-btn"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          {/* Back Button */}
          <button
            className="back-btn-landing"
            onClick={handleBackClick}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
