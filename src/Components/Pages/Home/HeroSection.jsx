import React from 'react';
import './HeroSection.css'; // Import the CSS file for styles

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="overlay" /> {/* Overlay for dimming effect */}
            <div className="hero-content"> {/* Centered content */}
                <h1 className="display-4">Welcome to Our Delicious World!</h1>
                <p className="lead">Explore our mouth-watering menu and discover your next favorite dish.</p>
                <button className="btn btn-primary btn-lg mt-4">Order Now</button>
            </div>
        </div>
    );
};

export default HeroSection;
