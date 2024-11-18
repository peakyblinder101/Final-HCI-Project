import React from 'react';
import '../styles/Favorites.css';

const Favorites = () => {
    const favoriteItems = ['Apple', 'Broccoli', 'Yoga', 'Running', 'Meditation'];

    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <ul>
                {favoriteItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
