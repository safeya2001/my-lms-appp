import React from 'react';
import logo from '../assets/logo.svg';

const TopHeaderBar = () => (
  <div className="hidden lg:block bg-[#1f2833] text-gray-300">
    <div className="container mx-auto flex items-center justify-between py-2 px-4">
      {/* Envato Market Section */}
      <div className="flex items-center space-x-2">
        <a href="#" className="flex items-center text-sm" aria-label="Envato Market">
          <img src={logo} alt="Envato Market" className="h-5" />
        </a>
      </div>

      {/* Buy Now Button */}
      <a
        href="#"
        className="px-4 py-1 bg-[#8bc34a] text-white rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200"
      >
        Buy now
      </a>
    </div>
  </div>
);

export default TopHeaderBar;
