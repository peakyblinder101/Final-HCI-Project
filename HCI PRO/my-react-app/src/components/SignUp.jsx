import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Overlay.css';
import '../styles/SignUp.css';

function SignUp() {
  console.log("SignUp rendered");
  return (
    <form className="signin-form">
      <h1 className="signin-title">
        Create Account
      </h1>
      <div className="form-fields-signin">
        
        <div className="left-column">
          <input className="left-column-input" 
            type="text" placeholder="First Name" />
          <input className="left-column-input" 
            type="text" placeholder="Middle Initial" />
          <input className="left-column-input" 
            type="text" placeholder="Last Name" />
          <input className="left-column-input" 
            type="email" placeholder="Email" />
        </div>
        
        <div className="right-column">
          <select className="right-column-input" 
             name="gender" id="gender">
            <option >Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input className="right-column-input"
            type="text" placeholder="Allergies (if any)" />
          <input className="right-column-input"
            type="password" placeholder="Password" />
          <input className="right-column-input"
            type="password" placeholder="Confirm Password" />
        </div>
      </div>
      
      <div className="social-container">
        <a href="#" className="social"><FaFacebookF /></a>
        <a href="#" className="social"><FaGooglePlusG /></a>
        <a href="#" className="social"><FaLinkedinIn /></a>
      </div>
      <span>or use your email for registration</span>

      <button className="signup-btn">Sign Up</button>
    </form>
  );
}

export default SignUp;
