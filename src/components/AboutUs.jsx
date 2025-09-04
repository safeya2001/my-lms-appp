import React from 'react';
import '../style/AboutUs.css';



const coursesData = [
    {
        id: 1,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg",
        price: "$265",
        category: "Business",
        title: "Financial Security Thinking and Principles Theory",
        lessons: "6 Lessons",
        duration: "4 hours",
        rating: "4.50",
        level: "All Levels",
        courseCount: "1 Courses"
    },
    {
        id: 2,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-420x280.jpg",
        price: "$250",
        category: "Finance",
        title: "Professional Ceramic Moulding for Beginners",
        lessons: "15 Lessons",
        duration: "4 hours",
        rating: "5.00",
        level: "All Levels",
        courseCount: "2 Courses"
    },
    {
        id: 3,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg",
        price: "Free",
        category: "UI/UX Design",
        title: "Basic Fundamentals of Interior & Graphics Design",
        lessons: "16 Lessons",
        duration: "22 hours 30 minutes",
        rating: "5.00",
        level: "Intermediate",
        courseCount: "3 Courses"
    },
    {
        id: 4,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg",
        price: "Free",
        category: "Digital Program",
        title: "WordPress for Beginners – Master WordPress",
        lessons: "15 Lessons",
        duration: "7 hours 30 minutes",
        rating: "4.33",
        level: "Beginner",
        courseCount: "2 Courses"
    },
    {
        id: 5,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg",
        price: "$300",
        category: "Data Science",
        title: "The Complete Python Course for Beginner 2023",
        lessons: "14 Lessons",
        duration: "18 hours 20 minutes",
        rating: "4.00",
        level: "Intermediate",
        courseCount: "1 Courses"
    },
    {
        id: 6,
        image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-caio-56759.jpg",
        price: "Free",
        category: "UI/UX Design",
        title: "Ultimate Photoshop Training: From Beginner",
        lessons: "14 Lessons",
        duration: "13 hours 20 minutes",
        rating: "3.33",
        level: "All Levels",
        courseCount: "3 Courses"
    }
];

const PopularCourses = () => {
    return (
        <section className="popular-courses-section section-padding">
            <div className="container">
                <div className="section-title">
                    <p className="subtitle-line">POPULAR COURSES ::after</p>
                    <h3>
                        Choose Our <span className="highlight-text">Top</span>
                        <br />
                        <span className="highlight-text">Courses</span>
                    </h3>
                </div>

                      
                <div className="row">
                    {coursesData.map(course => (
                        <div key={course.id} className="col-lg-6 col-12">
                            <div className="course-card">
                                <div className="course-img">
                                    <img src={course.image} alt={course.title} />
                                    <div className="price-tag">{course.price}</div>
                                </div>
                                <div className="course-content">
                                    <a className="category-btn" href="#">{course.category}</a>
                                    <h3><a href="#">{course.title}</a></h3>
                                    <div className="course-details">
                                        <span><i className="fa fa-file-text"></i>{course.lessons}</span>
                                        <span><i className="fa fa-clock-o"></i>{course.duration}</span>
                                        <span><i className="fa fa-star"></i>{course.rating}</span>
                                        <span><i className="fa fa-signal"></i><strong>{course.level}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-12 text-center">
                    <a className="btn_one" href="#">View All Course</a>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;