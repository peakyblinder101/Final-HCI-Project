import React from 'react';
import '../styles/ScanHistory.css';

const ScanHistory = () => {
    const scanData = [
        { date: '2024-10-01', result: 'Normal', details: 'No abnormalities detected' },
        { date: '2024-09-15', result: 'Warning', details: 'Slight elevation in blood sugar levels' },
        { date: '2024-09-01', result: 'Normal', details: 'Healthy readings' },
    ];

    return (
        <div className="scan-history">
            <h2>Scan History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {scanData.map((scan, index) => (
                        <tr key={index}>
                            <td>{scan.date}</td>
                            <td>{scan.result}</td>
                            <td>{scan.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScanHistory;
