import React from 'react';
import logo from '../assets/logo.svg';

const TopHeaderBar = () => (
  <div className="top-header-bar">
    <div className="top-header-container">
      {/* Envato Market Section */}
      <div className="envato-section">
        <a href="#" className="envato-link" aria-label="Envato Market">
          <img src={logo} alt="Envato Market" className="envato-logo" />
        </a>
      </div>

      {/* Buy Now Button */}
      <a
        href="#"
        className="buy-now-btn"
      >
        Buy now
      </a>
    </div>
  </div>
);

export default TopHeaderBar;