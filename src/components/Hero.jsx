import React, { useEffect } from 'react';
import bgImage from '../assets/bg.png'; // Import the background image

const Hero = () => {
  // Use effect for landing animation
  useEffect(() => {
    const heroElement = document.getElementById('hero-text');
    heroElement.classList.add('animate-fade-in'); // Add landing animation class
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex items-center justify-center"> {/* Flexbox for centering */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold">Astronomy Club</h1>
            </div>
            {/* Navbar Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Home
                </a>
                <a href="#events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Events
                </a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  About
                </a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
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
