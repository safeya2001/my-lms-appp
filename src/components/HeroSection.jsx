import React from 'react';
import '../style/HeroSection.css';

const HeroSection = () => {
    return (
        <section id="home" className="home_bg2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                        <div className="home_content hc_pt">
                            <h1>
                                Get smart <span>opportunity for</span> your best future
                            </h1>
                            <p>It is a long established fact that reader will be distracted readable content of a page when.</p>
                        </div>
                        <div className="search-section">
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Search your course here" />
                                <button className="search-button">
                                    Search <i className="fa fa-paper-plane-o"></i>
                                </button>
                            </div>
                            <div className="popular-topics">
                                <span className="label">Popular Topic:</span>
                                <a href="#" className="topic">Business</a>
                                <span className="comma">,</span>
                                <a href="#" className="topic">Data Science</a>
                                <span className="comma">,</span>
                                <a href="#" className="topic">Digital Program</a>
                                <span className="comma">,</span>
                                <a href="#" className="topic">Finance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;