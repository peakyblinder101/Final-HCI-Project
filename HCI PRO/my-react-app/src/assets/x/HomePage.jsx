import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import { Outlet } from 'react-router-dom'; // To render nested routes
import '../styles/HomePage.css'; // Import your CSS styles

const HomePage = () => {
  return (
    <div className="home-container">
      <Sidebar /> {/* Render the Sidebar */}
      <div className="main-content">
        {/* Add a heading or text to indicate it's the Home Page */}
        <h1>Home Page</h1> {/* This will display the "Home Page" text at the top */}
        
        {/* Render the nested route content here */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default HomePage;
