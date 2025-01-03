// LandingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LandingPage.css";
import foodImage from '../assets/empower.jfif'; 
import logo from '../assets/mainLogo.png';
import know from '../assets/know.png';
import barcode from '../assets/barcode.png';
import diet from '../assets/dietary.png';
import tips from '../assets/tips.png';
import search from '../assets/search.png';
import spoonfork from '../assets/spoonfork.png';
import barcode2 from '../assets/barcode2.png';
import howScan from '../assets/how-scan-image.jpg';
import yt from '../assets/yt.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import ig from '../assets/ig.png';
import ann from '../assets/wigmore.jpg'
import dostlogo from '../assets/dostlogo.png'
import shopsmart from '../assets/shop-smart-background.jfif'

function TeamMember({ image, name, role }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
    <div
      className="team-member"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="team-image" />
      {isHovered && (
        <div className="name-overlay">
          <h2>{name}</h2>
          <h4>{role}</h4>
        </div>
      )}
    </div>
  );
}

const LandingPage = () => {
  const navigate = useNavigate(); // Ensure this is defined
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false); // Track hover state
  const [isWhoWeServeHovered, setIsWhoWeServeHovered] = useState(false); // Track Who We Serve hover state
  const [isResourcesHovered, setIsResourcesHovered] = useState(false); // Track Resources hover state
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false); // Track About Us hover state


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    navigate('/sign-in'); // Navigate to the Sign In page
  };

  // Function to handle Sign Up click
  const handleSignUpClick = () => {
    navigate('/sign-up'); // Navigate to the Sign Up page
  };

   // Function to handle the "Get Started" button click
   const handleGetStartedClick = () => {
    console.log("Navigating to Sign Up...");
    navigate('/sign-up');  // Navigate to the /sign-up route
  };

    console.log("LandingPage is rendering...");
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h6>Barcode Health</h6>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li 
            className="nav-item"
            onMouseEnter={() => setIsSolutionsHovered(true)} 
            onMouseLeave={() => setIsSolutionsHovered(false)}
          >
            <a href="#solutions">Solutions</a>
            {isSolutionsHovered && (
              <div className="solutions-dropdown">
                <div className="column">
                  <h3>Our Platform</h3>
                  <p>Barcode Health empowers users to make informed food choices by providing them with easy access to product allergen information and nutritional details through barcode scanning.</p>
                </div>
                <div className="column">
                  <h3>Barcode Health Solutions</h3>
                  <ul>
                    <li><strong>Barcode Scanning<br/></strong> Real-time scanning of product barcodes to retrieve detailed nutritional and allergen information.</li>
                    <li><strong>Allergen Detection<br/></strong> Highlights products that contain user-flagged allergens, with customizable alerts based on individual profiles.</li>
                    <li><strong>Nutritional Breakdown<br/></strong> Displays comprehensive nutritional data, including calories, macronutrients, vitamins, and minerals, for each scanned product.</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>Healthy Shopping Tips</h3>
                  <p>Discover smart tips to make healthier choices while shopping. Learn how to read nutrition labels, compare products, and pick foods that align with your dietary goals.</p>
                </div>
              </div>
            )}
          </li>

          {/* Who We Serve Dropdown */}
          <li 
            className="nav-item"
            onMouseEnter={() => setIsWhoWeServeHovered(true)} 
            onMouseLeave={() => setIsWhoWeServeHovered(false)}
          >
            <a href="#who-we-serve">Who We Serve</a>
            {isWhoWeServeHovered && (
              <div className="who-we-serve-dropdown">
                <div className="column">
                  <h3>Who We Serve</h3>
                  <p>We provide tailored information for individuals with specific dietary needs and health goals.</p>
                </div>
                <div className="column">
                  <h3>People with Allergies</h3>
                  <p>Individuals with common or severe allergies to foods such as nuts, gluten, dairy, etc., looking to avoid harmful ingredients.</p>
                </div>
                <div className="column">
                  <h3>Health-Conscious Consumers</h3>
                  <p>Users who actively monitor their calorie intake, nutritional values, or those on special diets (e.g., keto, vegan, or low-carb diets).</p>
                </div>
                <div className="column">
                  <h3>Parents and Caregivers</h3>
                  <p>Those purchasing food for family members with allergies, such as parents of children with food sensitivities.</p>
                </div>
                <div className="column">
                  <h3>Fitness Enthusiasts</h3>
                  <p>Individuals focused on tracking their macros and overall nutrition for performance and fitness goals.</p>
                </div>
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li 
            className="nav-item"
            onMouseEnter={() => setIsResourcesHovered(true)} 
            onMouseLeave={() => setIsResourcesHovered(false)}
          >
            <a href="#resources">Resources</a>
            {isResourcesHovered && (
              <div className="resources-dropdown">
                <div className="column">
                  <h3>Case Studies</h3>
                  <p>Case studies explore the impact of diet awareness on individuals' health, focusing on how increased nutritional knowledge influences food choices, eating habits, and long-term well-being. They also highlight the importance of allergy awareness in dietary planning, examining how individuals with food allergies manage restrictions to avoid triggers.</p>
                </div>
              </div>
            )}
          </li>

          {/* About Us Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsAboutUsHovered(true)}
            onMouseLeave={() => setIsAboutUsHovered(false)}
          >
            <a href="#about-us">About Us</a>
            {isAboutUsHovered && (
              <div className="about-us-dropdown">
                <div className="column">
                  <h3>About Us</h3>
                  <h2>The People Behind the Vision</h2>
                  <p>
                    The dedicated individuals behind Barcode Health, with a mission and values pushing forward. It showcases their diverse backgrounds, expertise, and passions, illustrating how each member contributes to our shared vision. The team is committed to making a meaningful impact in the community and beyond.
                  </p>
                </div>
                <div className="column">
                  <h3>Join Us</h3>
                  <p>Contact Us</p>
                  <p>Interested in joining our mission? Reach out to us for more details about job opportunities, collaborations, and more.</p>
                  {/* Social Media Icons */}
                  <div className="social-icons">
                    <img src={yt} alt="YouTube" className="social-icon" />
                    <img src={fb} alt="Facebook" className="social-icon" />
                    <img src={twitter} alt="Twitter" className="social-icon" />
                    <img src={ig} alt="Instagram" className="social-icon" />
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
        
        <div className="nav-buttons">
        <button className="signin-button" onClick={handleSignInClick}>Sign In</button>
        <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </nav>
      
      <div className="food-choices-container">
        <div className="text-overlay">
            <h1>
            Empower<br/>
            Your Food<br/>
            Choices
            </h1>
          <p>
            Scan barcodes to instantly access<br/>
            allergen warnings, nutritional details,<br/>
            and personalize recommendations<br/>
            based on your dietary needs.
          </p>
          <button className="get-started-button" 
            onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
        <div className="image-section">
          <img src={foodImage} alt="Empower your food choices" />
        </div>
      </div>

      <div className="know-your-food-container">
        <div className="know-your-food-image">
          <img src={know} alt="Know-your-food"></img>
        </div>
        <div className="know-your-food-text">
          <h1>How to <br/>
          <span>Know your <br/>food?</span></h1>
          <p>
            BarcodeHealth helps users make smarter food choices by scanning barcodes to instantly reveal 
            nutritional details. It detects allergens, provides ingredient transparency, and offers 
            personalized insights based on your dietary profile—making it easy 
            to find foods that fit your lifestyle and health goals.
          </p>
        </div>
      </div> 

      <div className="scan-smarter-container">
        <div className="scan-smarter-text">
          <h2>Scan smarter with BarcodeHealth</h2>
        </div>
        <div>
          <ul className="form-info">
            <li>
              <div className="form1">
                <img src={barcode} alt="Barcode" />
                  <button className= "features-button">features</button>
                <h3>Barcode</h3>
                <p>Real-time scanning of product barcodes to retrieve 
                  detailed nutritional and allergen information.
                </p>
              </div>
            </li>
            <li>
              <div className="form2">
                <img src={diet} alt="Barcode" />
                <button className= "features-button">features</button>
                <h3>Dietary Profile</h3>
                <p>Customize your dietary needs and restrictions for personalized 
                  product recommendations and allergen alerts.
                </p>
              </div>
            </li>
            <li>
              <div className="form3">
                <img src={tips} alt="Barcode" />
                <button className= "features-button">features</button>
                <h3>Healthy Shopping Tips</h3>
                <p>Essential Tips for Navigating Food Allergies and 
                  Making Healthy Choices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="how-scan-container">
        <div className="how-scan-text">
          <h2>How the Scanner works</h2>
          <div>
            <ul className="how-scan-info">
              <li>
                <div className="how-scan-info1">
                  <div>
                    <img src={barcode2} alt="barcode-icon" />
                  </div>
                  <div>
                    <h3>Barcode Scanning</h3>
                    <p>The app scans barcodes to retrieve nutritional info, ingredients, and allergen alerts.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="how-scan-info2">
                  <img src={spoonfork} alt="nutrition-icon" />
                  <h3>Nutritional Breakdown</h3>
                  <p>provides nutritional details after a barcode scan to aid dietary choices.</p>
                </div>
              </li>
              <li>
                <div className="how-scan-info3">
                  <img src={search} alt="search-icon" />
                  <h3>Allergen Detection</h3>
                  <p> alerts users to allergens by identifying harmful ingredients based on dietary restrictions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="how-scan-image">
          <img src={howScan} alt="image" />
        </div>
      </div>

      <div className="healty-shopping-tips-container">
        <div className="healty-shopping-tips-text">
          <h2>Healthy shopping tips from reputable sources</h2>
          <p>
            "The food you eat can be either the safest and most powerful form of<br/>
            medicine or the slowest form of poison" - Ann Wigmore
          </p>
        </div>
        <div>
          <ul className="form-info-healty-tips">
            <li>
              <div className="form-info-healty-tips-left">
                <img src={ann} alt="Ann" />
                <h3>Ann Wigmore</h3>
                <p>
                  founded the Ann Wigmore Natural<br/>
                  Health Institute Inc.
                </p>
              </div>
            </li>
            <li>
              <div className="form-info-healty-tips-right">
                <h2>
                  "There is no single food that<br/>
                  contains all the nutrients that<br/>
                  our body needs so eating a<br/>
                  variety of food ensures that<br/> 
                  daily nutritional needs are<br/>
                  met."
                </h2>
                <div className="dost-container">
                <img src={dostlogo} alt="Dostlogo" />
                <p>
                  DOST - Food and Nutrition<br/>
                  Research Institute
                </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="shop-smart-container">
      <div className="shopsmart-image-container">
              <img src={shopsmart} alt="ShopSmart" />
          </div>
      <div className="shop-smart-text">
          <h2>Shop Smart Now</h2>
          <button className="get-started-button" 
            onClick={handleGetStartedClick}>
            Get Started
          </button>
      </div>
  </div>


      <div className="other-container">
        <ul className="infos">
          <li>
            <h4>Solutions</h4>
            <h6>Product Barcode</h6>
            <h6>Scanning</h6>
            <h6>Allergen Detection</h6>
            <h6>Nutritional Insights</h6>
            <h6>Personalized Dietary Profiles</h6>
          </li>
          <li>
            <h4>Who We Serve</h4>
            <h6>Health-Conscious Shoppers</h6>
            <h6>Individuals with Allergies</h6>
            <h6>Fitness Enthusiasts</h6>
            <h6>Nutritionists & Dietitians</h6>
            <h6>Families & Parents</h6>
          </li>
          <li>
            <h4>Resources</h4>
            <h6>FAQs</h6>
            <h6>Blog & Healthy Tips</h6>
            <h6>User Guide</h6>
            <h6>API Documentation</h6>
            <h6>Customer Support</h6>
          </li>
          <li>
            <h4>About Us</h4>
            <h6>Our Story</h6>
            <h6>Mission & Vision</h6>
            <h6>Team</h6>
            <h6>Careers</h6>
            <h6>Contact Information</h6>
          </li>
        </ul>
      </div>

      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="logo"/>
          <h6>Barcode Health</h6>
        </div>
        <div className="all-rights-reserved">
          <p>All Rights Reserved, Company Privacy</p>
          <p className="policy">POLICY | TERMS</p>
        </div>
        <div className="app-logos">
          <img src={fb} alt="facebook-logo" />
          <img src={twitter} alt="twitter-logo" />
          <img src={yt} alt="youtube-logo" />
          <img src={ig} alt="instagram-logo" />
        </div>
      </div>
    </div>
  ); 
} 

export default LandingPage;
