import React from 'react';
import '../style/CourseHeroSection.css';

const CourseHeroSection = () => {
    return (
        <section className="section-top">
            <div className="container">
                <div className="col-lg-10 offset-lg-1 text-center">
                    <div className="section-top-title">
                        <h1>Courses</h1>
                        <ul>
                            <li><a href="https://wpdemothemes.com/edusion/">Home</a></li>
                            <li> /Courses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHeroSection;