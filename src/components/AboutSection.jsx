import React from 'react';
import '../style/AboutSection.css';


const AboutSection = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <h3></h3>
                            <p>
                               
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-cards-row">
                    {/* Feature 1: Quality Education */}
                    <div className="single_tp">
                        <h3>Quality Education</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
                        </p>
                        <a href="#" className="explore-button">
                            EXPLORE COURSES <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>

                    {/* Feature 2: Experienced Teachers */}
                    <div className="single_tp">
                        <h3>Experienced Teachers</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
                        </p>
                        <a href="#" className="explore-button">
                            EXPLORE COURSES <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>

                    {/* Feature 3: Delicious Food */}
                    <div className="single_tp">
                        <h3>Delicious Food</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
                        </p>
                        <a href="#" className="explore-button">
                            EXPLORE COURSES <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;