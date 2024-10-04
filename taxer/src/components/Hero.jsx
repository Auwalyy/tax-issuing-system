import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="text-content">
            <h1 className="title-hero">Streamline Government Revenue Collection and Licensing.</h1>
            <p className="para">
                A secure, transparent system for issuing licences and taxes, 
                powered by real-time tracking and QR code verification.
            </p>
            <button className="cta">Get Started</button>
        </div>
        <div className="img-container">
            <img 
                src="https://media.istockphoto.com/id/2035137803/photo/qr-code-payment-e-wallet-cash-technology-concept-illustration-tag-scanning-people-in-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=a7gQ3QHJZ9ZEdTVuhOGgd-xvaSLf0m2XIuecqNTZn5c=" 
                alt="QR Code Payment" 
            />
        </div>
    </div>
  );
};

export default Hero;
