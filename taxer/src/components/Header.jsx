import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navlink = [
        { name: 'Features', link: '/feature' },
        { name: "Benefits", link: '/benefit' },
        { name: "Get Started", link: '/signup'}
    ];

    return (
        <header className="header">
            <div className="logo">
                <h1 className="title-a">Tax-Pay</h1>
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
            <Outlet />
        </header>
    );
};

export default Header;
