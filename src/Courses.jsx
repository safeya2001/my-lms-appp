import React from 'react';
import TopHeaderBar from './components/TopHeaderBar';
import SharedNavbar from './components/SharedNavbar';
import SharedFooter from './components/SharedFooter';
import Footer from './components/Footer';
import HeroSection from'./components/HeroSection';
import AboutSection from './components/AboutSection'
import CourseCategories from './components/CourseCategories'
import AboutUs from './components/AboutUs'
import PopularCourses from './components/PopularCourses'
import AchievementCounter from './components/AchievementCounter';
import VideoSection from './components/VideoSection';
import PartnersSection from './components/PartnersSection';
import CoursePromo from './components/CoursePromo';
import PricingSection from './components/PricingSection';
import Newsletter from './components/Newsletter';
import NewPageHero from './components/NewPageHero';
import AboutHeroSection from './components/AboutHeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamMembers from './components/TeamMembers';
import FAQs from './components/FAQs';
import '../src/style/TopHeaderBar.css'; 
import '../src/style/HeroSection.css';
import '../src/style/AboutSection.css'
import './style/global.css'
import '../src/style/CourseCategories.css'
import '../src/style/AboutUs.css';
import '../src/style/PopularCourses.css';
import './components/AchievementCounter.css';
import '../src/style/VideoSection.css';
import '../src/style/PartnersSection.css';
import '../src/style/CoursePromo.css';
import '../src/style/PricingSection.css';
import '../src/style/WhyChooseUs.css';
import '../src/style/TeamMembers.css';
import '../src/style/NewPageHero.css';
import '../src/style/AboutHeroSection.css';
import CourseHeroSection from '../src/components/CourseHeroSection';
import SharedNav from './components/SharedNav';


const Courses= () => {
    return (
        <div className="courses">
             <SharedNav/>
            <CourseHeroSection/>
        <PopularCourses/>
            <PartnersSection/>
    

            
        </div>
    );
};

export default Courses;