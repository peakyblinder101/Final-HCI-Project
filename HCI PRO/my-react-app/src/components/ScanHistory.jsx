import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScanHistory.css';
import dadi from '../assets/dadi.jpg';

const ScanHistory = () => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/dietaryprofile');  // Navigate to the DietaryProfile page when the user clicks on the card
      };
  
    // Example data for scan records
    const scanRecords = [
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        {
            barcode: '4567891234567', 
            date: '2024-11-16', 
            product: 'Orange Juice', 
            productInfo: 'View Info', 
            price: '$2.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        {
            barcode: '1234567890123', 
            date: '2024-11-18', 
            product: 'Apple', 
            productInfo: 'View Info', 
            price: '$1.50', 
            status: 'Safe', 
            isAllergy: false
        },
        {
            barcode: '9876543210123', 
            date: '2024-11-17', 
            product: 'Peanut Butter', 
            productInfo: 'View Info', 
            price: '$3.75', 
            status: 'Allergy Detected', 
            isAllergy: true
        },
        
    ];

    return (
        <div className="scan-history">
            
            
            <div className="small-card-user-container" onClick={handleCardClick}>
                <img
                src={dadi} 
                alt="User Avatar"
                className="user-avatar-small-card"
                />
                <div className="user-info-small-card">
                <p className="welcome-text-small-card">Welcome Back,</p>
                <p className="username-small-card">John Doe</p>
                </div>
            </div>

            <div className="scan-history-container">
                <h2>Scan History</h2>
                
               
                <div className="scan-history-categories">
                    <button className="all-category-btn">All</button>
                    <button className="safe-category-btn">Safe</button>
                    <button className="detect-category-btn">Allergies Detect</button>
                </div>

               
                <div className="all-history-scan-records-container">
                    <div className="table-header">
                        <div className="table-header-item">Barcode No.</div>
                        <div className="table-header-item">Date</div>
                        <div className="table-header-item">Product</div>
                        <div className="table-header-item">Product Info</div>
                        <div className="table-header-item">Price</div>
                        <div className="table-header-item">Status</div>
                    </div>

                   
                    {scanRecords.map((record, index) => (
                        <div
                            key={index}
                            className={`table-row ${record.isAllergy ? 'allergy-detected' : ''}`}
                        >
                            <div className="table-item">{record.barcode}</div>
                            <div className="table-item">{record.date}</div>
                            <div className="table-item">{record.product}</div>
                            <div className="table-item">{record.productInfo}</div>
                            <div className="table-item">{record.price}</div>
                            <div className="table-item">{record.status}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScanHistory;
