import React from 'react';
import '../style/CourseCategories.css';

const CourseCategories = () => {
    return (
        <section className="section-padding topic_content_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <h3>
                                <h2>START LEARNING </h2>
                                Popular <span className="highlight-text">Topics To Learn</span> From Today.
                            </h3>
                          
                        </div>
                    </div>
                </div>
                <div className="topic-grid">
                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct5.svg" alt="Business" />
                        <div className="text-content">
                            <h2>
                                <a href="#">Business</a>
                            </h2>
                            <span>1 Courses</span>
                        </div>
                    </div>

                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct6.svg" alt="Data Science" />
                        <div className="text-content">
                            <h2>
                                <a href="#">Data Science</a>
                            </h2>
                            <span>1 Courses</span>
                        </div>
                    </div>

                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct2.svg" alt="Digital Program" />
                        <div className="text-content">
                            <h2>
                                <a href="#">Digital Program</a>
                            </h2>
                            <span>2 Courses</span>
                        </div>
                    </div>

                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct3.svg" alt="Finance" />
                        <div className="text-content">
                            <h2>
                                <a href="#">Finance</a>
                            </h2>
                            <span>2 Courses</span>
                        </div>
                    </div>
                    
                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct4.svg" alt="Modern Physics" />
                        <div className="text-content">
                            <h2>
                                <a href="#">Modern Physics</a>
                            </h2>
                            <span>3 Courses</span>
                        </div>
                    </div>
                    
                    {}
                    <div className="single_tca">
                        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct1.svg" alt="UI/UX Design" />
                        <div className="text-content">
                            <h2>
                                <a href="#">UI/UX Design</a>
                            </h2>
                            <span>3 Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCategories;