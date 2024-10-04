import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navlink = [
        { name: 'Feature', link: '/feature' },
        { name: "Section", link: '/section' },
        { name: "Benefits", link: '/benefit' },
    ];

    return (
        <header className="header">
            <div className="logo">
                <h1 className="title-a">Logo</h1>
            </div>
            <nav className={`navlink ${isOpen ? 'open' : ''}`}>
                {navlink.map((item) => (
                    <a key={item.name} href={item.link} className="nav-item">
                        {item.name}
                    </a>
                ))}
            </nav>
            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;
