
import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Share2, // بديل لـ Pinterest
} from 'lucide-react';

const SharedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pages', href: '/', hasDropdown: true },
    { name: 'Courses', href: '/courses', hasDropdown: true },
    { name: 'Blog', href: '#blog', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Green Bar */}
      <div className="bg-[#4caf50] text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(+354) 6800 37849</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>hello@edusion.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Mon to Sat Open: 9am - 6pm</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a href="#" className="hover:opacity-80 transition">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Youtube size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Share2 size={16} />
            </a>
          </div>
        </div>
      </div>

   {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="https://wpdemothemes.com/edusion/wp-content/themes/edusion/assets/images/all-img/logo.png" className="flex items-center gap-2">
           
            <span className="text-2xl font-bold text-gray-800 font-inter">
              Edusion
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 font-medium transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="px-5 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
              >
                Contact
              </a>
              <a
                href="/account"
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
              >
                Account
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white pb-4 shadow-inner rounded-b-lg">
            <ul className="flex flex-col items-center gap-4 pt-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 font-medium transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-3 mt-5 px-4">
              <a
                href="/contact"
                className="w-full text-center px-5 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
              >
                Contact
              </a>
              <a
                href="/account"
                className="w-full text-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
              >
                Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SharedNavbar;
