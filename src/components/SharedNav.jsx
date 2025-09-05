import React from 'react';
import { Link } from 'react-router-dom'; 
import { Search, ShoppingCart } from 'lucide-react';
import '../style/SharedNav.css';

const navItems = [
    { name: "Home", href: "/" },
    { name: "Pages", href: "/about", hasDropdown: true },
    { name: "Courses", href: "/courses", hasDropdown: true },
    { name: "Blog", href: "/#", hasDropdown: true },
    { name: "Contact", href: "/contact" },
];

const SharedNav = () => {
    return (
        <nav className="nav-container">
            <div className="logo">
                <span className="logo-icon">🎓</span>
                <span className="logo-text">Edusion</span>
            </div>
            <div className="nav-links">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="nav-actions">
                <div className="icons">
                    <Search className="icon" />
                    <ShoppingCart className="icon" />
                    <span className="cart-count">0</span>
                </div>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default SharedNav;