import React, { useEffect } from 'react';
import bannerImage from '../assets/banner.png'; // Import the banner image

const Banner = () => {
  // Use effect for smooth scroll and fade-in animation on load
  useEffect(() => {
    const bannerText = document.getElementById('banner-text');
    bannerText.classList.add('animate-slide-in');
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden h-screen">
      {/* Background Image with controlled layout */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={bannerImage}
          alt="Banner"
        />
      </div>

      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Banner Quote Section */}
      <div
        id="banner-text"
        className="relative z-10 text-center text-white px-4 sm:px-8 lg:px-12 max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['EB Garamond'] font-semibold mb-6 leading-snug tracking-wide transition-opacity duration-700 ease-in-out">
          "Astronomy is a humbling reminder that in the vast expanse of the cosmos,
          <br />
          our existence is but a fleeting moment."
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-80 mt-4">
          – Astronomy Club RSET
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mt-12 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="text-white text-sm mt-2">Scroll Down</span>
      </div>

      {/* Smooth Scrolling Section */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 1s ease forwards;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
