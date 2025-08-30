import React, { useState, useEffect, useCallback } from 'react';
import TopHeaderBar from './components/TopHeaderBar';
import SharedNavbar from './components/SharedNavbar';
import SharedFooter from './components/SharedFooter';
import Footer from './components/Footer';








import { BookOpen, Award, Users, Search, MessageCircleQuestion, Lightbulb, GraduationCap, Star, Headset, Briefcase, BarChart, Code, DollarSign, Microscope, FlaskConical, Palette, Atom, Smile, FileText, Trophy, Play, CheckCircle, Send, X, Phone, Mail, Clock } from 'lucide-react';
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
          if (response.status === 429) { // Too Many Requests
            const delay = baseDelay * Math.pow(2, retries) + Math.random() * 1000; // Exponential backoff with jitter
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
          setShowSummaryModal(true); // Show modal on successful summary
          break; // Exit retry loop
        } else {
          setSummary('Could not generate summary. Please try again.');
          break; // Exit retry loop
        }
      } catch (error) {
        console.error("Error fetching AI summary:", error);
        setSummary('Failed to generate summary due to an error.');
        break; // Exit retry loop on unrecoverable error
      } finally {
        setLoadingSummary(false);
      }
    }

    if (retries === maxRetries && !summary) {
      setSummary('Failed to generate summary after multiple retries.');
      setLoadingSummary(false);
    }
  }, [course.title, course.category, course.instructor]);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1">
      {/* Course Image */}
      <div className="relative h-48 w-full">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/cccccc/333333?text=${encodeURIComponent(course.title)}` }}
        />
        {course.isPopular && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          {course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}
        </span>
      </div>

      <div className="p-5">
        {/* Category */}
        <span className="text-sm text-gray-500 font-inter">{course.category}</span>
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-800 mt-2 hover:text-indigo-600 transition-colors duration-200 ease-in-out font-inter">
          <a href={course.link}>{course.title}</a>
        </h3>
        {/* Instructor */}
        <div className="flex items-center text-gray-600 mt-3 font-inter">
          <Users className="w-4 h-4 mr-2 text-indigo-500" />
          <span>{course.instructor}</span>
        </div>
        {/* Rating and Reviews */}
        <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600 text-sm font-inter">
            {course.rating.toFixed(1)} ({course.reviews} Reviews)
          </span>
        </div>
        {/* AI Summary Button */}
        <button
          onClick={getAiCourseSummary}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300"
          disabled={loadingSummary}
        >
          {loadingSummary ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <><Lightbulb className="w-5 h-5" /> <span>AI Summary</span></>
          )}
        </button>
      </div>

      {/* AI Summary Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h4 className="text-xl font-bold text-gray-800 mb-4">AI Course Summary</h4>
            <p className="text-gray-700 mb-6">{summary}</p>
            <button
              onClick={() => setShowSummaryModal(false)}
              className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



const PricingPlanCard = ({ plan }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden h-full">
      {/* Background wave effect - matching image */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-tr from-emerald-400 to-emerald-500 transform skew-y-6 -translate-y-1/2 opacity-20"></div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2 z-10">{plan.name}</h3>
      <p className="text-5xl font-extrabold text-gray-900 mb-1 z-10">
        ${plan.price}
      </p>
      <p className="text-gray-500 text-sm mb-6 z-10">/{plan.duration}</p>

      {plan.yearlyPrice && (
        <p className="text-emerald-500 text-base font-semibold mb-6 z-10">{plan.yearlyPrice}</p>
      )}

      <ul className="space-y-3 text-left w-full mb-8 z-10 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
        {plan.extraFeature && (
          <li className="flex items-center text-gray-600 font-semibold mt-4">
            <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
            <span>{plan.extraFeature}</span>
          </li>
        )}
      </ul>

      <button className="w-full bg-emerald-500 text-white py-3 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors duration-300 z-10 mt-auto">
        Start Now
      </button>
    </div>
  );
};
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courseSuggestions, setCourseSuggestions] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [assistantMessage, setAssistantMessage] = useState('');
  const [loadingAssistant, setLoadingAssistant] = useState(false);
  const [showAssistantModal, setShowAssistantModal] = useState(false);
  const [assistantInput, setAssistantInput] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false); 
  const services = [
    { icon: GraduationCap, title: 'Quality Education', description: 'Access top-tier educational content designed by experts.' },
    { icon: Users, title: 'Experienced Teachers', description: 'Learn from industry-leading instructors with practical insights.' },
    { icon: Headset, title: '24/7 Support', description: 'Get assistance anytime, anywhere with our dedicated support team.' }, // Changed icon and description
  ];

  // Mock data for popular topics, matching the new image
  const popularTopics = [
    { name: 'Business', icon: Briefcase, courses: 1 },
    { name: 'Data Science', icon: BarChart, courses: 1 },
    { name: 'Digital Program', icon: Code, courses: 2 },
    { name: 'Finance', icon: DollarSign, courses: 2 },
    { name: 'Modern Physics', icon: Atom, courses: 3 }, // Using Atom for Physics
    { name: 'UI/UX Design', icon: Palette, courses: 3 }, // Using Palette for Design
  ];

  // Mock data for top courses (combining previous popular courses here)
  const topCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'Development',
      instructor: '',
      price: 265.00, // Updated price from image
      rating: 4.8,
      reviews: 250,
      image: 'https://placehold.co/400x200/9e0000/ffffff?text=Web+Dev',
      link: '#',
      isPopular: true,
    },
    {
      id: 2,
      title: 'Mastering UI/UX Design with Figma',
      category: 'Design',
      instructor: 'Jane Smith',
      price: 39.99,
      rating: 4.7,
      reviews: 180,
      image: 'https://placehold.co/400x200/004d40/ffffff?text=UI/UX+Design',
      link: '#',
      isPopular: false,
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy 2024',
      category: 'Marketing',
      instructor: 'Mike Johnson',
      price: 59.99,
      rating: 4.9,
      reviews: 300,
      image: 'https://placehold.co/400x200/5e35b1/ffffff?text=Digital+Marketing',
      link: '#',
      isPopular: true,
    },
    {
      id: 4,
      title: 'Python for Data Science & Machine Learning',
      category: 'Data Science',
      instructor: 'Emily White',
      price: 69.99,
      rating: 4.6,
      reviews: 220,
      image: 'https://placehold.co/400x200/d84315/ffffff?text=Data+Science',
      link: '#',
      isPopular: false,
    },
    // Adding a placeholder for the "Financial Security Thinking And Principles Theory" course from the image
    {
      id: 5,
      title: 'Financial Security Thinking And Principles Theory',
      category: 'Business',
      instructor: 'David Lee',
      price: 265.00,
      rating: 4.5,
      reviews: 150,
      image: 'https://placehold.co/600x400/9e0000/ffffff?text=Financial+Security',
      link: '#',
      isPopular: true,
    },
  ];

  // Mock data for achievements section
  const achievements = [
    { number: 854, label: 'Enrolled Students', icon: Smile, color: 'text-indigo-500' },
    { number: 521, label: 'Academic Programs', icon: FileText, color: 'text-orange-500' },
    { number: 163, label: 'Winning Award', icon: Trophy, color: 'text-emerald-500' },
    { number: 93, label: 'Certified Students', icon: GraduationCap, color: 'text-red-500' }, // Using GraduationCap for Certified Students
  ];

  // Mock data for client logos
  const clientLogos = [
    { name: 'Nexeon Techno', logo: 'https://placehold.co/100x40/000000/ffffff?text=Nexeon' },
    { name: 'Architect', logo: 'https://placehold.co/100x40/000000/ffffff?text=Architect' },
    { name: 'Buthers', logo: 'https://placehold.co/100x40/000000/ffffff?text=Buthers' },
    { name: 'The Hosoren', logo: 'https://placehold.co/100x40/000000/ffffff?text=Hosoren' },
    { name: 'Hipsters', logo: 'https://placehold.co/100x40/000000/ffffff?text=Hipsters' },
    // Duplicate for infinite scroll effect
    { name: 'Nexeon Techno', logo: 'https://placehold.co/100x40/000000/ffffff?text=Nexeon' },
    { name: 'Architect', logo: 'https://placehold.co/100x40/000000/ffffff?text=Architect' },
    { name: 'Buthers', logo: 'https://placehold.co/100x40/000000/ffffff?text=Buthers' },
  ];

  // Mock data for pricing plans
  const pricingPlans = [
    {
      name: 'Free',
      price: '0',
      duration: 'Month',
      yearlyPrice: 'Upgrade as you need',
      features: [
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
      ],
      extraFeature: null, // No extra feature for Free plan
    },
    {
      name: 'Saver plan',
      price: '29',
      duration: 'Month',
      yearlyPrice: '$348 Per Year',
      features: [
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
      ],
      extraFeature: null, // No extra feature for Saver plan
    },
    {
      name: 'Unlimited plan',
      price: '49',
      duration: 'Month',
      yearlyPrice: '$588 Per Year',
      features: [
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
        'Learn at your own pace',
      ],
      extraFeature: 'Learn at your own pace', // Extra feature for Unlimited plan
    },
  ];

  /**
   * Fetches smart course suggestions based on the search query using Gemini API.
   * Uses exponential backoff for retries.
   */
  const fetchCourseSuggestions = useCallback(async (query) => {
    if (!query.trim()) {
      setCourseSuggestions([]);
      setShowSearchSuggestions(false);
      return;
    }

    setLoadingSearch(true);
    const prompt = `Given the search query "${query}", suggest 3-5 relevant course titles for an LMS platform. Format them as a comma-separated list. Example: "Web Development, Data Science, Digital Marketing".`;
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
            parts: [{ text: "You are a helpful assistant that suggests course titles based on user queries." }]
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
          const suggestionsText = candidate.content.parts[0].text;
          const suggestionsArray = suggestionsText.split(',').map(s => s.trim()).filter(s => s !== '');
          setCourseSuggestions(suggestionsArray);
          setShowSearchSuggestions(true);
          break;
        } else {
          setCourseSuggestions(['No suggestions found.']);
          setShowSearchSuggestions(true);
          break;
        }
      } catch (error) {
        console.error("Error fetching course suggestions:", error);
        setCourseSuggestions(['Failed to fetch suggestions.']);
        setShowSearchSuggestions(true);
        break;
      } finally {
        setLoadingSearch(false);
      }
    }

    if (retries === maxRetries && courseSuggestions.length === 0) {
      setCourseSuggestions(['Failed to fetch suggestions after multiple retries.']);
      setLoadingSearch(false);
      setShowSearchSuggestions(true);
    }
  }, [courseSuggestions]);

  /**
   * Handles changes in the search input and triggers suggestion fetching.
   */
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) { // Fetch suggestions after 2 characters
      fetchCourseSuggestions(query);
    } else {
      setCourseSuggestions([]);
      setShowSearchSuggestions(false);
    }
  };

  /**
   * Handles submitting the search form (e.g., navigating to a courses page with the query).
   */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, you would navigate to a courses page with the search query
      console.log('Searching for:', searchQuery);
      // Example: window.location.href = `/courses?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  /**
   * Sends user's question to the AI assistant and gets a response.
   */
  const handleAssistantAsk = useCallback(async () => {
    if (!assistantInput.trim()) return;

    setLoadingAssistant(true);
    const prompt = `Answer the following question about an LMS platform named Edusion. If the question is about general learning or course content, provide a helpful and encouraging response. Question: "${assistantInput}"`;
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
            parts: [{ text: "You are a friendly and helpful virtual assistant for an LMS platform called Edusion. Provide concise and encouraging answers." }]
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
            console.warn(`Assistant rate limit hit. Retrying in ${delay / 1000}s...`);
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
          setAssistantMessage(candidate.content.parts[0].text);
          setShowAssistantModal(true);
          setAssistantInput('');
          break;
        } else {
          setAssistantMessage('Could not get a response. Please try again.');
          break;
        }
      } catch (error) {
        console.error("Error fetching assistant response:", error);
        setAssistantMessage('An error occurred. Please try again.');
        break;
      } finally {
        setLoadingAssistant(false);
      }
    }

    if (retries === maxRetries && !assistantMessage) {
      setAssistantMessage('Failed to get a response after multiple retries.');
      setLoadingAssistant(false);
    }
  }, [assistantInput, assistantMessage]);

  const VideoModal = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl h-auto aspect-video rounded-xl overflow-hidden shadow-xl">
        {/* Close button */}
        <button
          onClick={() => setShowVideoModal(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full p-2"
        >
          <X size={24} />
        </button>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Placeholder Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-20 pb-20 md:pt-32 md:pb-40 rounded-b-3xl overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Content Column */}
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider rounded-full py-1 px-3 bg-emerald-100">
                Start Learning Now
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-4">
                Unlimited learning opportunities
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Explore a wide range of courses and start your journey with the best instructors.
              </p>
              {/* Search Bar */}
              <div className="relative mt-8 max-w-xl mx-auto md:mx-0">
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="flex-grow p-4 pl-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                  />
                  <button
                    type="submit"
                    className="p-4 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition duration-300 transform -translate-x-1"
                  >
                    {loadingSearch ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Search className="w-6 h-6" />
                    )}
                  </button>
                </form>
                {/* Search Suggestions Dropdown */}
                {showSearchSuggestions && courseSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-2 z-20">
                    <ul className="py-2">
                      {courseSuggestions.map((suggestion, index) => (
                        <li key={index}>
                          <a href={`/courses?query=${encodeURIComponent(suggestion)}`} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-700">
                            {suggestion}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Image Column */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/600x400/8d8d8d/ffffff?text=LMS+Hero+Image"
                alt="LMS Hero"
                className="w-full max-w-md rounded-2xl shadow-xl transform rotate-3 scale-105 transition-transform duration-500 ease-in-out"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8d8d8d/ffffff?text=LMS+Hero+Image" }}
              />
              {/* Play Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white rounded-full p-4 shadow-xl text-indigo-600 hover:scale-110 transition-transform duration-300"
              >
                <Play size={32} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && <VideoModal />}

      {/* Services/Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col items-center">
                <div className={`p-4 rounded-full ${service.title.includes('Quality') ? 'bg-indigo-100 text-indigo-500' : service.title.includes('Teachers') ? 'bg-emerald-100 text-emerald-500' : 'bg-red-100 text-red-500'}`}>
                  <service.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-6">{service.title}</h3>
                <p className="mt-2 text-gray-600 max-w-xs">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Topics</h2>
          <p className="mt-2 text-gray-600 text-lg">Choose a topic you want to learn about and start your journey.</p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularTopics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-full mb-4">
                  <topic.icon size={28} className="text-indigo-600" />
                </div>
                <h4 className="text-md font-semibold text-gray-800">{topic.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{topic.courses} Courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top Courses</h2>
            <p className="mt-2 text-gray-600 text-lg">Explore our most popular and highly-rated courses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`text-6xl font-bold ${item.color}`}>{item.number}+</div>
                <div className="flex items-center mt-2">
                  <item.icon className={`w-6 h-6 mr-2 ${item.color}`} />
                  <p className="text-lg text-gray-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Choose your plan</h2>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that best fits your learning needs and budget.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingPlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Section (Infinite Scroll Effect) */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by companies like</h3>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-logos">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Modal */}
      {showAssistantModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-gray-800">AI Assistant</h4>
              <button onClick={() => setShowAssistantModal(false)} className="text-gray-500 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-700 mb-6">{assistantMessage}</p>
            <button
              onClick={() => setShowAssistantModal(false)}
              className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Virtual Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowAssistantModal(true)}
          className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          <Headset size={28} />
        </button>
      </div>
    </main>
  );
};


// Main App component that manages the application state and renders pages
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // About Us Page component
  const AboutPage = () => (
    <main className="p-4 sm:p-8 md:p-16">
      <section className="bg-gray-100 p-8 sm:p-12 md:p-20 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">عن منصة Edusion</h1>
        <p className="text-gray-600 text-lg text-center leading-relaxed">
          نحن في Edusion نؤمن بأن التعليم يجب أن يكون متاحاً للجميع. مهمتنا هي بناء جسر بين المتعلمين والمصادر التعليمية عالية الجودة، من خلال توفير منصة سهلة الاستخدام وملهمة.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-5xl mb-4">🎯</span>
            <h2 className="text-2xl font-bold mb-2">رؤيتنا</h2>
            <p className="text-gray-600">أن نصبح المنصة الرائدة في التعليم عبر الإنترنت، ونمكن الأفراد من تحقيق إمكاناتهم الكاملة.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-5xl mb-4">🤝</span>
            <h2 className="text-2xl font-bold mb-2">مهمتنا</h2>
            <p className="text-gray-600">تقديم دورات تدريبية عملية ومبتكرة، مدعومة بأدوات تعليمية متطورة ومجتمع داعم.</p>
          </div>
        </div>
      </section>
    </main>
  );

  // Courses Page component
  const CoursesPage = () => {
    const courses = [
      { id: 1, title: 'تطوير الويب للمبتدئين', description: 'ابدأ رحلتك في عالم الويب بتعلم HTML, CSS, JavaScript.' },
      { id: 2, title: 'الذكاء الاصطناعي', description: 'اكتشف أساسيات الذكاء الاصطناعي وتعلم بناء نماذج التعلم الآلي.' },
      { id: 3, title: 'التصميم الجرافيكي', description: 'أتقن برامج التصميم مثل Photoshop و Illustrator.' },
      { id: 4, title: 'إدارة المشاريع', description: 'تعلم كيفية التخطيط للمشاريع وتنفيذها بفعالية.' },
      { id: 5, title: 'التسويق الرقمي', description: 'تعرف على استراتيجيات التسويق الرقمي الحديثة.' },
      { id: 6, title: 'تحليل البيانات', description: 'استخدم Python و R لتحليل البيانات واتخاذ القرارات.' },
    ];

    return (
      <main className="p-4 sm:p-8 md:p-16">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">جميع الدورات</h1>
          <p className="text-lg text-gray-600">اكتشف الدورات التي تناسب شغفك وتطلعاتك المهنية.</p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <div className="flex justify-end mt-4">
                  <button className="bg-orange-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
                    سجل الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  };

  // Contact Page component
  const ContactPage = () => (
    <main className="p-4 sm:p-8 md:p-16">
      <section className="bg-gray-100 p-8 sm:p-12 md:p-20 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">تواصل معنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-600 mb-4">
              نحن هنا لمساعدتك! لا تتردد في الاتصال بنا لطرح أي أسئلة أو استفسارات.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <p className="text-gray-700">123 طريق المعرفة، المدينة التعليمية</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <p className="text-gray-700">support@edusion.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <p className="text-gray-700">+123 456 7890</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );



  // Conditional rendering based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-right">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body {
          font-family: 'Cairo', sans-serif;
        }
      `}</style>
      <TopHeaderBar />
      <SharedNavbar />
      {renderPage()}
      <SharedFooter />
    </div>
  );
};

export default App;
