import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg.png'; // Import the background image

const Hero = () => {
  // Use effect for landing animation
  useEffect(() => {
    const heroElement = document.getElementById('hero-text');
    heroElement.classList.add('animate-fade-in'); // Add landing animation class
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold">Astronomy Club</h1>
            </div>
            {/* Hamburger Menu for Mobile View */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            {/* Navbar Links */}
            <div className={`hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700">
                  Home
                </a>
                <a href="#events" className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700">
                  Events
                </a>
                <a href="#about" className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700">
                  About
                </a>
                <a href="#contact" className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-700">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-70">
            <div className="flex flex-col items-start px-4 py-2">
              <a href="#hero" className="w-full text-lg font-medium py-2 hover:bg-gray-700">
                Home
              </a>
              <a href="#events" className="w-full text-lg font-medium py-2 hover:bg-gray-700">
                Events
              </a>
              <a href="#about" className="w-full text-lg font-medium py-2 hover:bg-gray-700">
                About
              </a>
              <a href="#contact" className="w-full text-lg font-medium py-2 hover:bg-gray-700">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={bgImage}
        alt="Background"
      />

      {/* Overlay */}
      <div className="w-full h-full absolute inset-0 bg-black opacity-60" /> {/* Darker overlay */}

      {/* Hero Text - Centered on Screen with Hover Effect */}
      <div
        id="hero-text"
        className="flex flex-col items-center justify-center z-20 text-white text-center"
      >
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-normal font-['Bebas Neue'] transition-transform duration-300 hover:scale-110">
          ASTRONOMY
        </h1>
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-normal font-['Bebas Neue'] transition-transform duration-300 hover:scale-110">
          CLUB
        </h1>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards; /* Adjust duration and easing as needed */
        }
      `}</style>
    </div>
  );
};

export default Hero;
