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
import '../src/style/Newsletter.css';
import Newsletter from './components/Newsletter';
import './App.css'
import '../src/style/BlogSection.css';
import BlogSection from './components/BlogSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from './AboutPage'; 

import '../src/style/NewPageHero.css';
import NewPageHero from './components/NewPageHero';

import '../src/style/CourseHeroSection.css';

import { BookOpen, Award, Users, Search, MessageCircleQuestion, Lightbulb, GraduationCap, Star, Headset, Briefcase, BarChart, Code, DollarSign, Microscope, FlaskConical, Palette, Atom, Smile, FileText, Trophy, Play, CheckCircle, Send, X, Phone, Mail, Clock } from 'lucide-react';
import CourseCategories from './components/CourseCategories';
import CourseHeroSection from './components/CourseHeroSection';
import Courses from './Courses'
import ContactUS from './ContactUs';

const API_KEY = ""; 
const CourseCard = ({ course }) => {
  const [summary, setSummary] = useState('');
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const getAiCourseSummary = useCallback(async () => {
    setLoadingSummary(true);
    setSummary('');
    const prompt = `Provide a concise, engaging 2-3 sentence summary for a course titled "${course.title}" in the category "${course.category}". The instructor is "${course.instructor}". Focus on what a potential student would find most appealing.`;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
    let retries = 0;
    const maxRetries = 3;
    const baseDelay = 1000; 

    while (retries < maxRetries) {
      try {
        const payload = {
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ "google_search": {} }],
          systemInstruction: {
            parts: [{ text: "You are a helpful assistant that generates appealing course summaries." }]
          },
        };

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          if (response.status === 429) {
            const delay = baseDelay * Math.pow(2, retries) + Math.random() * 1000; 
            console.warn(`Rate limit hit. Retrying in ${delay / 1000}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            retries++;
            continue;
          } else {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
          }
        }

        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
          const generatedText = candidate.content.parts[0].text;
          setSummary(generatedText);
          setShowSummaryModal(true);
          break; 
        } else {
          setSummary('Could not generate summary. Please try again.');
          break;
        }
      } catch (error) {
        console.error("Error fetching AI summary:", error);
        setSummary('Failed to generate summary due to an error.');
        break; 
      } finally {
        setLoadingSummary(false);
      }
    }

    if (retries === maxRetries && !summary) {
      setSummary('Failed to generate summary after multiple retries.');
      setLoadingSummary(false);
    }
  }, [course.title, course.category, course.instructor]);


};




const App = () => {
    return (
        <div 
            className="App"
            style={{
                backgroundImage: "url('https://www.bing.com/images/search?view=detailV2&ccid=nmY2o1Md&id=D0B696F792779C67DDDDBFFC09DB66542EBAA0A0&thid=OIP.nmY2o1MdUEMRBhFkRVxkyAHaGF&mediaurl=https%3a%2f%2fwww.tandemconstruction.com%2fsites%2fdefault%2ffiles%2fstyles%2fproject_slider_main%2fpublic%2fimages%2fproject-images%2fIMG-Fieldhouse-10.jpg%3fitok%3dWhi8hHo9&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9e6636a3531d504311061164455c64c8%3frik%3doKC6LlRm2wn8vw%26pid%3dImgRaw%26r%3d0&exph=1970&expw=2400&q=IMG&FORM=IRPRST&ck=DE8864D531B58C16309410723EC75F12&selectedIndex=0&itb=0')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}
        >
            <BrowserRouter>
                {}
                <TopHeaderBar />
                <SharedNavbar />

                {}
                <Routes>
                    <Route 
                        path="/" 
                        element={
                          
                            <>
                                <HeroSection />
                                <AboutSection/>
                                <CourseCategories/>
                                <NewPageHero/>
                                <AboutUs/>
                                <PopularCourses/>
                                <AchievementCounter/>
                                <VideoSection/>
                                <PartnersSection/>
                                <CoursePromo/>
                                <PricingSection/>
                                <Newsletter/>
                                <BlogSection/>
                            </>
                        } 
                    />
                    {}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/courses" element={<Courses/>} />
                    <Route path="/contact" element={<ContactUS/>} />
                </Routes>
                
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;