import React from 'react';
import '../style/BlogSection.css';

const blogPosts = [
    {
        image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-thisisengineering-3862132-370x260.jpg',
        date: 'Jun 01, 2024',
        category: 'Technology',
        title: 'Professional Mobile Painting and Sculpting',
        link: 'https://wpdemothemes.com/edusion/professional-mobile-painting-and-sculpting/'
    },
    {
        image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/pexels-thisisengineering-3861972-370x260.jpg',
        date: 'May 29, 2024',
        category: 'Programming',
        title: 'Professional Ceramic Moulding for Beginner',
        link: 'https://wpdemothemes.com/edusion/professional-ceramic-moulding-for-beginner/'
    },
    {
        image: null,
        date: 'Jun 01, 2024',
        category: 'Technology',
        title: 'Professional Mobile Painting and Sculpting',
        link: 'https://wpdemothemes.com/edusion/professional-mobile-painting-and-sculpting/'
    },
    {
        image: null,
        date: 'May 29, 2024',
        category: 'Programming',
        title: 'Professional Ceramic Moulding for Beginner',
        link: 'https://wpdemothemes.com/edusion/professional-ceramic-moulding-for-beginner/'
    }
];

const BlogSection = () => {
   
    const firstPost = blogPosts[0];
    
    const secondPost = blogPosts[1];

    const textPosts = blogPosts.slice(2, 4);

    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="section-title text-left">
                    <span>NEWS</span>
                    <h2>Our Latest <span><u>Blogs</u></span></h2>
                </div>
                <div className="row blog-grid-container">
                    {}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="single_blog with-image">
                            <img src={firstPost.image} alt={firstPost.title} />
                            <div className="content_box">
                                <span>{firstPost.date} | <a href="#">{firstPost.category}</a></span>
                                <h2><a href={firstPost.link}>{firstPost.title}</a></h2>
                                <a href={firstPost.link} className="cta">
                                    <span>READ MORE</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="single_blog with-image">
                            <img src={secondPost.image} alt={secondPost.title} />
                            <div className="content_box">
                                <span>{secondPost.date} | <a href="#">{secondPost.category}</a></span>
                                <h2><a href={secondPost.link}>{secondPost.title}</a></h2>
                                <a href={secondPost.link} className="cta">
                                    <span>READ MORE</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className="col-lg-4 col-md-12">
                        <div className="blog-column-vertical">
                            {textPosts.map((post, index) => (
                                <div key={index} className="single_blog without-image mb-4">
                                    <div className="content_box">
                                        <span>{post.date} | <a href="#">{post.category}</a></span>
                                        <h2><a href={post.link}>{post.title}</a></h2>
                                        <a href={post.link} className="cta">
                                            <span>READ MORE</span>
                                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;