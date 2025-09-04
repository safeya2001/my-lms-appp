import React from 'react';
import '../style/AboutHeroSection.css';

const AboutHeroSection = () => {
    return (
        <section className="section-top">
            <div className="container">
                <div className="col-lg-10 offset-lg-1 text-center">
                    <div className="section-top-title">
                        <h1>About Us</h1>
                        <ul>
                            <li><a href="https://wpdemothemes.com/edusion/">Home</a></li>
                            <li> / About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;