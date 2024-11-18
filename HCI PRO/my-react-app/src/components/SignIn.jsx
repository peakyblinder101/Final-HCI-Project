// SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Overlay.css';
import '../styles/Signup.css';
import '../styles/SignIn.css';

function SignIn({ onSignIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Handle form submission (simulate sign-in)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignIn form submitted with email:", email);

    // Call onSignIn prop to notify parent component (App)
    if (onSignIn) {
      console.log("Calling onSignIn()...");
      onSignIn();
    }

    navigate('/home');  // Redirect to home
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <input
        className="signin-input"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        className="signin-input"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <a href="#">Forgot your password?</a>
      <div className="social-container">
        <a href="#" className="social"><FaFacebookF /></a>
        <a href="#" className="social"><FaGooglePlusG /></a>
        <a href="#" className="social"><FaLinkedinIn /></a>
      </div>
      <span>or use your account</span>
      <button className="signin-btn" type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
