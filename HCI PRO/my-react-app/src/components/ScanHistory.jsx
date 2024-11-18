import React from 'react';
import '../styles/ScanHistory.css';

const ScanHistory = () => {
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
        // Add more example records as needed
    ];

    return (
        <div className="scan-history">
            <div className="scan-history-container">
                <h2>Scan History</h2>
                
                {/* Category buttons */}
                <div className="scan-history-categories">
                    <button className="category-btn">All</button>
                    <button className="category-btn">Safe</button>
                    <button className="category-btn">Allergies Detect</button>
                </div>

                {/* Scan Records Table */}
                <div className="all-history-scan-records-container">
                    <div className="table-header">
                        <div className="table-header-item">Barcode No.</div>
                        <div className="table-header-item">Date</div>
                        <div className="table-header-item">Product</div>
                        <div className="table-header-item">Product Info</div>
                        <div className="table-header-item">Price</div>
                        <div className="table-header-item">Status</div>
                    </div>

                    {/* Table rows */}
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
