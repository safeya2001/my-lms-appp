import React from 'react';
import '../style/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="section-header">
        <p className="subtitle">WHY CHOOSE EDUSION</p>
        <h2 className="title">Find The <span className="highlight">Best Features</span> Of Edusion</h2>
      </div>
      <div className="features-container">
        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-book ss_one"></i>
              <h2><a href="#">Learn More <br/>Anywhere</a></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>
        </div>

        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-user ss_two"></i>
              <h2><a href="#">Expert Instructor</a></h2>
            </div>
            <p>Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempar ut Jobore.</p>
          </div>
        </div>
        
        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-stats-up ss_three"></i>
              <h2><a href="#">Team Management</a></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>
        </div>
        
        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-layout-media-overlay ss_four"></i>
              <h2><a href="#">Course Planning</a></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>
        </div>
        
        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-comments-smiley ss_five"></i>
              <h2><a href="#">Teacher Monitoring</a></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut lobore.</p>
          </div>
        </div>
        
        {}
        <div className="feature-card">
          <div className="single_feature_one">
            <div className="sf_top">
              <i className="ti-headphone-alt ss_six"></i>
              <h2><a href="#">24/7 Strong Support</a></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;