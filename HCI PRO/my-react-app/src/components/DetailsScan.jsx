import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DetailsScan.css'; // Import the CSS file for styles

const DetailsScan = () => {
  const { barcode } = useParams();

  return (
    <div className="details-scan-container">
      {/* Barcode and No Allergens Detected Section */}
      <div className="barcode-section">
        <div className="barcode-container">
          <p className="barcode-number">Barcode# {barcode}</p>
        </div>
        <div className="no-allergens-container">
          <p className="no-allergens-text">No Allergens Detected</p>
        </div>
      </div>

      {/* Main Content Section (Calories, Allergens, Nutrients, and Nutrient Info) */}
      <div className="main-content">
        <div className="left-column">
          {/* Calories container */}
          <div className="calories-container">
            <p className="calories-title">Calories</p>
            <p className="calories-value">200 kcal</p>
          </div>

          {/* Allergens container (below Calories) */}
          <div className="allergens-container">
            <p className="allergens-title">Allergens</p>
            <p className="allergens-list">Milk, Eggs, Peanuts</p>
          </div>
        </div>

        <div className="right-column">
          {/* Nutrients container */}
          <div className="nutrients-container">
            <p className="nutrients-title">Nutrients</p>
            <ul className="nutrients-list">
              <li>Carbohydrates: 30g</li>
              <li>Proteins: 5g</li>
              <li>Fats: 8g</li>
              <li>Vitamins: Vitamin A, Vitamin C</li>
            </ul>
          </div>

          {/* Nutrient Info container */}
          <div className="nutrient-info-container">
            <p className="nutrient-info-title">Nutrient Info</p>
            <ul className="nutrient-info-list">
              <li>Calories: 10 kcal</li>
              <li>Saturated Fats: 2g</li>
              <li>Trans Fats: 2g</li>
              <li>Cholesterol: 5mg</li>
              <li>Sodium: 8mg</li>
              <li>Dietary Fiber: 3g</li>
              <li>Sugars: 3g</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="ingredients-container">
        <p className="ingredients-title">Ingredients</p>
        <p className="ingredients-list">Whole Wheat Flour, Sugar, Butter, Eggs, Milk, Salt</p>
      </div>

      {/* Add to Favorites Button */}
      <div className="add-to-favorites-container">
        <button className="add-to-favorites">Add to Favorites</button>
      </div>
    </div>
  );
};

export default DetailsScan;
