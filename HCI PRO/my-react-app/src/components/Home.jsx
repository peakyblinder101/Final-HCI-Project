import React from 'react';
import '../styles/Home.css'; // Assuming you want to have specific styles for this page
import { FaRegClock } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      <div className="scanner-container">
        <div className="scanner">
          {/* Scan Button positioned at the bottom-right */}
          <button className="scan-button">Start Scan</button>
        </div>
      </div>

      {/* Recent Scans Container */}
      <div className="recent-scans-container">
        <h3 className="recent-scans-h3">
          <FaRegClock style={{ marginRight: '8px' }} /> Recent Scans
        </h3>
        <h3 className="product-info-h3">Product Info</h3>
        <div className="recent-scans">
          <ul>
            <li>Scan 1 - Product 1</li>
            <li>Scan 2 - Product 2</li>
            <li>Scan 3 - Product 3</li>
            <li>Scan 4 - Product 4</li>
            <li>Scan 5 - Product 5</li>
            {/* Add more items as necessary */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
