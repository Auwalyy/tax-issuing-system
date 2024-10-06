import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>About Us</h3>
          <p>Committed to enhancing government revenue collection and licensing.</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/feature">Features</a></li>
            <li><a href="/section">How It Works</a></li>
            <li><a href="/benefit">Benefits</a></li>
            <li><a href="/pricing">Pricing</a></li> 
            <li><a href="/support">Support</a></li> 
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
          <p>Phone: <a href="tel:+2348026697610">(+234) 8026-697-610</a></p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
