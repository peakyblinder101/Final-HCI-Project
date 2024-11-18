import React from 'react';
import '../styles/DietaryProfile.css';

const DietaryProfile = () => {
    return (
        <div className="dietary-profile">
            <h2>Dietary Profile</h2>
            <div className="dietary-content">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Age:</strong> 28</p>
                <p><strong>Height:</strong> 5'10"</p>
                <p><strong>Weight:</strong> 170 lbs</p>
                <p><strong>Diet Preferences:</strong> Vegetarian, Gluten-Free</p>
                <p><strong>Daily Caloric Intake:</strong> 2200 kcal</p>
            </div>
            <button className="edit-button">Edit Profile</button>
        </div>
    );
};

export default DietaryProfile;
