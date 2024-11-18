import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaStickyNote, FaGoogle, FaFacebook } from 'react-icons/fa'; // Import Google and Facebook icons
import '../styles/Signup.css';
import rightpic from '../assets/signuploginpic.jfif'; 

const Signup = ({ onSignupSuccess, onSwitch }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [allergies, setAllergies] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  // State to keep track of focused fields
  const [focusedFields, setFocusedFields] = useState({
    firstName: false,
    lastName: false,
    middleName: false,
    gender: false,
    email: false,
    password: false,
    confirmPassword: false,
    allergies: false,
  });

  const validateFields = () => {
    let errors = {};

    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";
    if (!gender) errors.gender = "Please select your gender.";

    if (!email) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
      }
    }

    if (!password) errors.password = "Password is required.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";

    const trimmedAllergies = allergies.split(',').map(a => a.trim());
    if (trimmedAllergies.length === 0 || trimmedAllergies.every(a => a === '')) {
      errors.allergies = "Allergies cannot be empty.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields();
    setErrorMessages(errors);

    if (Object.values(errors).every((msg) => msg === '')) {
      setErrorMessage('');
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            gender,
            email,
            password,
            allergies,
          }),
        });

        if (!response.ok) {
          throw new Error('Signup failed! Please try again.');
        }

        onSignupSuccess(); // Call success handler
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Update focus state on input focus and blur
  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: !Boolean(eval(field)) }));
  };

  return (
    <div className='container-sig'>
      <div className="signup-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => handleFocus('firstName')}
                onBlur={() => handleBlur('firstName')}
                required
                className={firstName || focusedFields.firstName ? 'filled' : ''}
              />
              <label htmlFor="firstName">
                <FaUser /> First Name:
              </label>
              {errorMessages.firstName && <div className="error-message">{errorMessages.firstName}</div>}
            </div>

            <div className="form-group">
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className={gender ? 'filled' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="gender"> </label>
              {errorMessages.gender && <div className="error-message">{errorMessages.gender}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                onFocus={() => handleFocus('middleName')}
                onBlur={() => handleBlur('middleName')}
                className={middleName || focusedFields.middleName ? 'filled' : ''}
              />
              <label htmlFor="middleName">
                <FaUser /> Middle Name (Optional):
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                onFocus={() => handleFocus('allergies')}
                onBlur={() => handleBlur('allergies')}
                className={allergies || focusedFields.allergies ? 'filled' : ''}
              />
              <label htmlFor="allergies">
                <FaStickyNote /> Allergies (comma separated):
              </label>
              {errorMessages.allergies && <div className="error-message">{errorMessages.allergies}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => handleFocus('lastName')}
                onBlur={() => handleBlur('lastName')}
                required
                className={lastName || focusedFields.lastName ? 'filled' : ''}
              />
              <label htmlFor="lastName">
                <FaUser /> Last Name:
              </label>
              {errorMessages.lastName && <div className="error-message">{errorMessages.lastName}</div>}
            </div>

            <div className="form-group">
              <div className="password-container-signup">
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
                  <FaLock /> Password:
                </label>
                <span onClick={togglePasswordVisibility}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errorMessages.password && <div className="error-message">{errorMessages.password}</div>}
            </div>
          </div>

          <div className="form-row">
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
              {errorMessages.email && <div className="error-message">{errorMessages.email}</div>}
            </div>

            <div className="form-group">
              <div className="password-container-signup">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  required
                  className={confirmPassword || focusedFields.confirmPassword ? 'filled' : ''}
                />
                <label htmlFor="confirmPassword">
                  <FaLock /> Confirm Password:
                </label>
                
                <span onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errorMessages.confirmPassword && <div className="error-message">{errorMessages.confirmPassword}</div>}
            </div>
          </div>

          <div className='signup-form-button-container'>
            <button className="signup-form-button" type="submit">
              Sign Up
            </button>
          </div>
          
          {/* Social media signup */}
          <div className="social-signup-container">
            <p className="or">or</p>
            <div className="social-icons">
              <div className="social-icon" onClick={() => alert("Sign up with Google")}>
                <FaGoogle size={30} />
              </div>
              <div className="social-icon" onClick={() => alert("Sign up with Facebook")}>
                <FaFacebook size={30} />
              </div>
            </div>
          </div>

        </form>
        <p onClick={onSwitch} className="switch">
          Already have an account? <span className="link">Log In</span>
        </p>

      </div>

      {/* Add your image here */}
      <div className="signup-image-container">
          <img src= {rightpic} alt="Signup" />
        </div> 
      </div>
    </div>

  );
};

export default Signup;
