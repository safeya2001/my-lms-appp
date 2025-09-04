import React from 'react';
import '../style/NewPageHero.css';

const NewPageHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content-container">
        <div className="hero-image-container">
          <img 
            src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-967x1024.png"
            alt="Woman smiling"
            className="hero-image"
          />
        </div>
        <div className="hero-text-container">
          <h2>
            Learn New Skills To Go Ahead <br />
            <span>For Your Career.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.
          </p>
          <p>
            <strong>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</strong>
          </p>
          <a href="#" className="explore-btn">Explore More</a>
        </div>
      </div>
    </div>
  );
};

export default NewPageHero;