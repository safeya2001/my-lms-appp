import React from 'react';
import '../style/TeamMembers.css';

const TeamMembers = () => {
  return (
    <section className="team-members-section">
      <div className="section-header">
        <p className="subtitle">TEAM MEMBER</p>
        <h2 className="title">Our Expert Instructors</h2>
      </div>
      <div className="team-container">
        
        {}
        <div className="our-team">
          <div className="team_img">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team2.jpg" alt="Daniel Miller" />
            <ul className="social">
              <li><a href="https://facebook.com/username" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/username" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com/username" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="team-content">
            <h3 className="title"><a href="#">Daniel Miller</a></h3>
            <span className="post">Logo Expert</span>
            <div className="sth_det2">
              <span className="ti-file"><u>3 Courses</u></span>
              <span className="ti-user"><u>3 Students</u></span>
            </div>
          </div>
        </div>
        
        {}
        <div className="our-team">
          <div className="team_img">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team1.jpg" alt="Masum Billah" />
            <ul className="social">
              <li><a href="https://facebook.com/username" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/username" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com/username" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="team-content">
            <h3 className="title"><a href="#">Masum Billah</a></h3>
            <span className="post">Developer</span>
            <div className="sth_det2">
              <span className="ti-file"><u>6 Courses</u></span>
              <span className="ti-user"><u>5 Students</u></span>
            </div>
          </div>
        </div>
        
        {}
        <div className="our-team">
          <div className="team_img">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-vladimir-kudin-10141145.jpg" alt="Kenneth Renteria" />
            <ul className="social">
              <li><a href="https://facebook.com/username" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/username" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" aria-label="Website"><i className="fa fa-globe"></i></a></li>
            </ul>
          </div>
          <div className="team-content">
            <h3 className="title"><a href="#">Kenneth Renteria</a></h3>
            <span className="post">Marketer</span>
            <div className="sth_det2">
              <span className="ti-file"><u>0 Courses</u></span>
              <span className="ti-user"><u>0 Students</u></span>
            </div>
          </div>
        </div>
        
        {/* Team Member 4 */}
        <div className="our-team">
          <div className="team_img">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-boris-hamer-16645409.jpg" alt="Richard Hood" />
            <ul className="social">
              <li><a href="https://facebook.com/username" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/username" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com/username" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="team-content">
            <h3 className="title"><a href="#">Richard Hood</a></h3>
            <span className="post">UI UX Designer</span>
            <div className="sth_det2">
              <span className="ti-file"><u>2 Courses</u></span>
              <span className="ti-user"><u>0 Students</u></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamMembers;