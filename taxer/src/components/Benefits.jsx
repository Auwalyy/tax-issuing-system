import React from 'react';
import { FaEye, FaCheckCircle, FaClock, FaLock } from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    { id: 1, name: "Transparency", desc: "Reduces corruption through detailed tracking", icon: <FaEye /> },
    { id: 2, name: "Convenience", desc: "Government can easily retrieve lost licences and track taxes", icon: <FaCheckCircle /> },
    { id: 3, name: "Efficiency", desc: "Real-time revenue monitoring for government efficiency", icon: <FaClock /> },
    { id: 4, name: "Security", desc: "End-to-end encryption to safeguard sensitive information", icon: <FaLock /> }
  ];

  return (
    <div className='benefits-container'>
      <h1 className="title">Why Choose Our System?</h1>
      <div className='benefits-grid'>
        {benefits.map((item) => (
          <div key={item.id} className="benefit-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
