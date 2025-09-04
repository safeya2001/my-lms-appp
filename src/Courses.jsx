import React, { useState, useEffect, useCallback } from 'react';
import TopHeaderBar from './components/TopHeaderBar';
import SharedNavbar from './components/SharedNavbar';
import SharedFooter from './components/SharedFooter';
import Footer from './components/Footer';
import '../src/style/TopHeaderBar.css'; 
import  HeroSection from'./components/HeroSection';
import '../src/style/HeroSection.css';
import AboutSection from './components/AboutSection'
import '../src/style/AboutSection.css'
import './style/global.css'
import '../src/style/CourseCategories.css'
import CourseCategories from './components/CourseCategories'

import '../src/style/AboutUs.css';
import AboutUs from './components/AboutUs'
import '../src/style/PopularCourses.css';
import PopularCourses from './components/PopularCourses'
import './components/AchievementCounter.css';
import AchievementCounter from './components/AchievementCounter';
import '../src/style/VideoSection.css';
import VideoSection from './components/VideoSection';
import '../src/style/PartnersSection.css';
import PartnersSection from './components/PartnersSection';
import '../src/style/CoursePromo.css';
import CoursePromo from './components/CoursePromo';
import '../src/style/PricingSection.css';
import PricingSection from './components/PricingSection';
import '../src/style/WhyChooseUs.css';
import Newsletter from './components/Newsletter';
import '../src/style/TeamMembers.css';
import '../src/style/NewPageHero.css';
import NewPageHero from './components/NewPageHero';
import '../src/style/AboutHeroSection.css';
import AboutHeroSection from './components/AboutHeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamMembers from './components/TeamMembers';
import FAQs from './components/FAQs';

const Courses = () => {
    return (
        <div className="about-page">
            
      <CourseHeroSection/>
         <AboutSection/>
         <NewPageHero/>
         <WhyChooseUs/>
             <AchievementCounter/>
<TeamMembers/>
<FAQs/>
             <PartnersSection/>
           
        </div>
    );
};

export default Courses;