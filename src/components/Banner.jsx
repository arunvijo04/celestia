import React from 'react';
import bannerImage from '../assets/banner.png'; // Import the banner image

const Banner = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={bannerImage}
        alt="Banner"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Banner Text */}
      <div className="relative z-10 text-center text-white text-5xl font-normal font-['EB Garamond'] mb-6">
        Astronomy is a humbling reminder that in the vast expanse of the cosmos,
        <br />
        our existence is but a fleeting moment
      </div>
    </div>
  );
};

export default Banner;
