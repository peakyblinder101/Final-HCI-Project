import React, { useState } from 'react';
import '../styles/HealthyTips.css';
import joanna from '../assets/joanna.png';
import myNetDiaryImage from '../assets/mynetdiary.png'; // Make sure this is the correct path to your image

const HealthyTips = () => {
    // Array containing multiple sets of quotes, authors, explanations, etc.
    const quotesData = [
        {
            quote: "“Do something today that your future self will thank you for.”",
            author: "- Joanna Kriehn, MS, RDN, CDCES",
            explanation: "“Our healthy grocery shopping tips will help turn an unavoidable necessity into a strategic effort toward improving your health. When you apply these five grocery shopping tips and recognize the \"hazards\" designed to \"trip you up,\" you'll be able to navigate past the grocery store temptations with a healthy supply of whole foods instead.”",
            authorImage: joanna,
            myNetDiaryImage: myNetDiaryImage,
            authorBio: "Registered Dietitian Nutritionist and Certified Diabetes Care and Education Specialist (CDCES)",
            authorName: "Joanna Kriehn",
            authorTitle: "MS, RDN, CDCES",
        },
        {
            quote: "“Success is the sum of small efforts, repeated day in and day out.”",
            author: "- Unknown",
            explanation: "“Healthy habits are built by making small but consistent efforts over time. Applying these strategies regularly will help you create lasting positive changes for your health.”",
            authorImage: joanna,  // Use a different image or keep the same
            myNetDiaryImage: myNetDiaryImage,  // Use the same or different image
            authorBio: "Health and Wellness Coach",
            authorName: "John Doe",
            authorTitle: "Health Coach",
        },
        {
            quote: "“Do something today that your future self will thank you for.”",
            author: "- Joanna Kriehn, MS, RDN, CDCES",
            explanation: "“Our healthy grocery shopping tips will help turn an unavoidable necessity into a strategic effort toward improving your health. When you apply these five grocery shopping tips and recognize the \"hazards\" designed to \"trip you up,\" you'll be able to navigate past the grocery store temptations with a healthy supply of whole foods instead.”",
            authorImage: joanna,
            myNetDiaryImage: myNetDiaryImage,
            authorBio: "Registered Dietitian Nutritionist and Certified Diabetes Care and Education Specialist (CDCES)",
            authorName: "Joanna Kriehn",
            authorTitle: "MS, RDN, CDCES",
        },
        {
            quote: "“Do something today that your future self will thank you for.”",
            author: "- Joanna Kriehn, MS, RDN, CDCES",
            explanation: "“Our healthy grocery shopping tips will help turn an unavoidable necessity into a strategic effort toward improving your health. When you apply these five grocery shopping tips and recognize the \"hazards\" designed to \"trip you up,\" you'll be able to navigate past the grocery store temptations with a healthy supply of whole foods instead.”",
            authorImage: joanna,
            myNetDiaryImage: myNetDiaryImage,
            authorBio: "Registered Dietitian Nutritionist and Certified Diabetes Care and Education Specialist (CDCES)",
            authorName: "Joanna Kriehn",
            authorTitle: "MS, RDN, CDCES",
        },
        // Add more quote sets here...
    ];

    // State to track the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle "next" button click (move to the next quote set)
    const handleNext = () => {
        if (currentIndex < quotesData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle "previous" button click (move to the previous quote set)
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentQuote = quotesData[currentIndex];

    return (
        <div className="healthy-tips">
            <div className="healthy-tips-container">
                
                {/* Left Arrow (Previous) */}
                <div 
                    className={`arrow-left ${currentIndex === 0 ? 'hidden' : ''}`}
                    onClick={handlePrevious}
                >
                    &#8592;
                </div>

                {/* Quote and Author Container */}
                <div className="quote-container">
                    <p className="quote">{currentQuote.quote}</p>
                    <p className="author">{currentQuote.author}</p>
                    
                    {/* Explanation Container */}
                    <div className="explanation-container">
                        <p>{currentQuote.explanation}</p>
                        
                        {/* MyNetDiary Container (Positioned at the bottom) */}
                        <div className="mynetdiary-container">
                            <img 
                                src={currentQuote.myNetDiaryImage} 
                                alt="MyNetDiary" 
                                className="mynetdiary-image"
                            />
                            <div className="mynetdiary-text">
                                <p className="mynetdiary-title">MyNetDiary</p>
                                <p className="mynetdiary-description">Digital Diet Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Author Identity Container */}
                <div className="author-identity-container">
                    <img 
                        src={currentQuote.authorImage}
                        alt="Author" 
                        className="author-image"
                    />
                    <div className="author-bio">
                        <p className="author-name">{currentQuote.authorName}</p>
                        <p className="author-title">{currentQuote.authorTitle}</p>
                        <p className="author-description">{currentQuote.authorBio}</p>
                    </div>
                </div>

                {/* Right Arrow (Next) */}
                <div 
                    className={`arrow-right ${currentIndex === quotesData.length - 1 ? 'hidden' : ''}`}
                    onClick={handleNext}
                >
                    &#8594;
                </div>
            </div>
        </div>
    );
};

export default HealthyTips;
