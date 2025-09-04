import React from 'react';
import '../style/CoursePromo.css';


const promoList = [
  { id: 1, text: '9/10 Average Satisfaction Rate' },
  { id: 2, text: '96% Completitation Rate' },
  { id: 3, text: 'Friendly Environment & Expert Teacher' },
];

const CoursePromo = () => {
  return (
    <section className="course_promo section-padding">
      <div className="container">
        <div className="row">
          {}
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
            <div className="cp_content">
              <h4>Best Online Learning Platform</h4>
              <h2>One Platform & Many <span><u>Courses</u></span> For You</h2>
              <p>
                From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones and languages.
              </p>
              <ul>
                {promoList.map((item) => (
                  <li key={item.id}>
                    <span className="ti-check"></span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cp_btn">
              <a href="#" className="cta">
                <span>Explore Our Courses</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {}
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="cp_img">
              <img src= 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png'
               className="img-fluid" alt="Best Online Learning Platform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePromo;