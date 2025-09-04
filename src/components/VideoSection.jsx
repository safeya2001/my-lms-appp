import React from 'react';
import '../style/VideoSection.css'; 

const VideoSection = () => {
  return (
    <section className="vid_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 vp_top wow fadeInUDown animated">
            <div className="video-area">
              <a href="https://www.youtube.com/watch?v=0KYxN1kJSb0" className="magnific_popup video-button">
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;