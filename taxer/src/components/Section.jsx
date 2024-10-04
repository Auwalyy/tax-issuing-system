import React from 'react';
import './Section.css';

const Section = () => {
  const steps = [
    "Citizens apply for licences or pay taxes online",
    "The system generates a digital receipt and QR code",
    "Citizens and officials can verify licences/taxes instantly",
    "Payments and revenue are tracked in real-time"
  ];

  return (
    <div className='section-container'>
      <h1 className="title">How It Works</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <h2>Step {index + 1}</h2>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
