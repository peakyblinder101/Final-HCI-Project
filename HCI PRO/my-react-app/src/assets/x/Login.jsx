import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa'; // Import Google and Facebook icons
import '../styles/Login.css';

const Login = ({ onSwitch, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [focusedFields, setFocusedFields] = useState({
    email: false,
    password: false,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed! Check your email and password.');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token if needed
      onLoginSuccess(); // Call the success function
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: !Boolean(eval(field)) }));
  };

  return (
    <div className='container-log'>
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error messages */}
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
              className={email || focusedFields.email ? 'filled' : ''}
            />
            <label htmlFor="email">
              <FaEnvelope /> Email:
            </label>
          </div>
          
          <div className="form-group">
            <div className="password-container-login">
              <input 
                type={passwordVisible ? 'text' : 'password'} 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                required
                className={password || focusedFields.password ? 'filled' : ''}
              />
              <label htmlFor="password">
                <FaLock /> Password: Password:
              </label>

              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className='login-form-button-container'>
            <button className="login-form-button" type="submit">
              Log In
            </button>
          </div>

        </form>
        <p onClick={onSwitch} className="switch">
          Don't have an account? <span className="link">Sign Up</span>
        </p>
      </div>
    </div>  
  );
};

export default Login;
