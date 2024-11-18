import React from 'react';
import '../styles/HealthyTips.css';

const HealthyTips = () => {
    return (
        <div className="healthy-tips">
            <h2>Healthy Tips</h2>
            <div className="tips-list">
                <div className="tip">
                    <h3>Drink More Water</h3>
                    <p>Ensure you're drinking at least 8 cups of water per day to stay hydrated and healthy.</p>
                </div>
                <div className="tip">
                    <h3>Eat More Vegetables</h3>
                    <p>Include a variety of vegetables in your diet for essential nutrients and fiber.</p>
                </div>
                <div className="tip">
                    <h3>Exercise Regularly</h3>
                    <p>Engage in at least 30 minutes of moderate physical activity most days of the week.</p>
                </div>
            </div>
        </div>
    );
};

export default HealthyTips;
