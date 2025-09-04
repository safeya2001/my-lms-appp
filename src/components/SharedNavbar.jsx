import React, { useState } from "react";
import AboutPage from '../AboutPage'

 import { Link } from "react-router-dom"; 
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Youtube,
  AlignCenter,
} from "lucide-react";
import "../style/SharedNavbar.css";

const SharedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
 { name: "Pages", href: "/about", hasDropdown: true },
    { name: "Courses", href: "/courses", hasDropdown: true },
    { name: "Blog", href: "#blog", hasDropdown: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="shared-navbar">
      {}
      <div className="top-bar">
        <div className="top-bar-container">
          {}
          <div className="top-item">
            <Phone className="top-icon" />
            <span>+(354) 6800 37849</span>
          </div>

          {}
          <div className="top-item">
            <Mail className="top-icon" />
            <a href="mailto:hello@edusion.com">hello@edusion.com</a>
          </div>

          {}
          <div className="top-item">
            <Clock className="top-icon" />
            <span>Mon to Sat Open: 9am - 6pm</span>
          </div>

          {}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <Twitter size={16} />
            </a>
            <a href="#" className="social-icon">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-icon">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {}
      <div className="main-navbar">
        <div className="main-navbar-container">
          {}
          <a
            href="/"
            className="logo-link"
          >
            <span className="logo-text">Edusion</span>
          </a>

          {}
          <div className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn contact-btn">
                Contact
              </a>
              <a href="/account" className="cta-btn account-btn">
                Account
              </a>
            </div>
          </div>

          {}
          <div className="mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {}
        {isOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="mobile-nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-cta-buttons">
              <a href="/contact" className="mobile-cta-btn contact-btn">
                Contact
              </a>
              <a href="/account" className="mobile-cta-btn account-btn">
                Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SharedNavbar;
