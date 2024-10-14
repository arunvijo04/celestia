import React, { useEffect } from 'react';
import eventsImage from '../assets/events.png'; // Import the image

const Events = () => {
  // Use effect for landing animation
  useEffect(() => {
    const eventsHeading = document.getElementById('events-heading');
    const eventsDescription = document.getElementById('events-description');
    eventsHeading.classList.add('animate-fade-in'); // Add landing animation class
    eventsDescription.classList.add('animate-fade-in'); // Add landing animation class
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6"> {/* Use flexbox for centering */}
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0 z-0" // Cover the entire div and make sure it's behind content
        src={eventsImage}
        alt="Events"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" /> {/* Dark overlay for better text visibility */}

      {/* Events Heading */}
      <h1
        id="events-heading" // ID for the heading effect
        className="relative z-10 text-white text-5xl lg:text-6xl font-['EB Garamond'] transition-transform duration-300 hover:scale-105 text-center mb-4"
      >
        EVENTS
      </h1>

      {/* Text Description */}
      <p
        id="events-description" // ID for the description effect
        className="relative z-10 text-white text-lg lg:text-2xl font-['EB Garamond'] text-center max-w-4xl mb-8 transition-transform duration-300 hover:scale-105"
      >
        Explore a cosmic blend of knowledge and excitement at our Astronomy Club events. From captivating stargazing nights to informative workshops and celestial competitions, join us for stellar experiences that bring the wonders of the universe closer to home.
      </p>

      {/* Event Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[300px] h-[300px] bg-[#a6a7ab]/40 rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        ))}
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

export default Events;
