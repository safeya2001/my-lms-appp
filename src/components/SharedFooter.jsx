import React from 'react';
import {
  BookOpen,
  MessageCircleQuestion,
  Lightbulb,
} from 'lucide-react';

const SharedFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6 rounded-t-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 font-inter">Edusion</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-inter">
            Edusion is a leading online learning platform dedicated to providing high-quality educational content to students worldwide.
          </p>
          <div className="flex space-x-4 mt-5">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.455h-1.248c-1.21 0-1.573.75-1.573 1.51v1.81h2.77l-.443 2.893h-2.327v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M19.633 7.997c.412-.178.858-.3 1.32-.3.49 0 .97.098 1.41.288-.3-.213-.67-.393-1.077-.534a4.026 4.026 0 0 1-.958-.33c-.024-.009-.047-.018-.071-.027-.33-.12-.676-.217-1.03-.286A8.003 8.003 0 0 0 12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c3.085 0 5.86-1.748 7.24-4.483a8.002 8.002 0 0 0-7.24-11.517zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.46 6c-.77.34-1.6.56-2.46.66.89-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.3 4.6 17.2 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.85-4.48-.37.64-.58 1.38-.58 2.18 0 1.49.75 2.81 1.88 3.58-.69-.02-1.34-.21-1.91-.53v.03c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.13.15-.27 0-.53-.02-.79-.08.54 1.7 2.11 2.93 3.97 2.96C9.17 19.5 7.42 20 5.56 20c-.34 0-.68-.02-1.01-.06 1.88 1.29 4.14 2.04 6.57 2.04 7.88 0 12.06-6.53 12.06-12.29 0-.19-.01-.38-.01-.56.97-.7 1.82-1.57 2.49-2.55z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.626 0 12-5.373 12-12s-5.374-12-12-12zm6.208 6.94l-5.61 5.61-2.064-2.064c-.382-.382-.997-.382-1.379 0s-.382.997 0 1.379l2.75 2.75c.191.191.442.287.69.287.249 0 .5-.096.69-.287l6.3-6.3c.382-.382.382-.997 0-1.379s-.997-.382-1.379 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 font-inter">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">About Us</a></li>
            <li><a href="/courses" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Courses</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Contact</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 font-inter">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Digital Marketing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Graphic Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 text-sm font-inter">Data Science</a></li>
          </ul>
        </div>

{/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 font-inter">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
              <span className="font-inter">(+354) 6800 37849</span>
            </li>
            <li className="flex items-center">
              <MessageCircleQuestion className="w-4 h-4 mr-2 text-indigo-500" />
              <span className="font-inter">hello@edusion.com</span>
            </li>
            <li className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-2 text-indigo-500" />
              <span className="font-inter">Mon to Sat Open: 9am - 6pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm font-inter">
        &copy; {new Date().getFullYear()} Edusion. All rights reserved.
      </div>
    </footer>
  );
};

export default SharedFooter;