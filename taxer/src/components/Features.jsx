import React from 'react';
import { FaMoneyCheckAlt, FaQrcode, FaLock, FaChartLine } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <div className='features-container'>
      <h1 className="title">Our Features Highlight</h1>
      <div className="features">
        <div className="feature-item">
          <FaMoneyCheckAlt className="feature-icon" />
          <h2>Tax Issuance</h2>
          <p>Issue and track licences and taxes with ease</p>
        </div>
        <div className="feature-item">
          <FaQrcode className="feature-icon" />
          <h2>QR-Code Verification</h2>
          <p>Instant Verification for every transaction</p>
        </div>
        <div className="feature-item">
          <FaLock className="feature-icon" />
          <h2>Secure Payments</h2>
          <p>Integrated payment gateways for hassle-free transactions</p>
        </div>
        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <h2>Real-time Reporting</h2>
          <p>Revenue and track payments with live analytics</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
