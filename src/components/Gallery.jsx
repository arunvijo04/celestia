import React, { useEffect } from 'react';
import eventsImage from '../assets/events.png'; // Import the image

const Gallery = () => {
  // Use effect for landing animation
  useEffect(() => {
    const eventsHeading = document.getElementById('events-heading');
    const eventsDescription = document.getElementById('events-description');
    eventsHeading.classList.add('animate-fade-in'); // Add landing animation class
    eventsDescription.classList.add('animate-fade-in'); // Add landing animation class
  }, []);

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0 z-0"
        src={eventsImage}
        alt="Events"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" /> {/* Dark overlay for better text visibility */}

      {/* Events Heading */}
      <h1
        id="events-heading"
        className="relative z-10 text-white text-5xl md:text-6xl font-['EB Garamond'] transition-transform duration-300 hover:scale-105 text-center mb-6"
      >
        GALLERY
      </h1>

      {/* Text Description */}
      <p
        id="events-description"
        className="relative z-10 text-white text-lg md:text-xl lg:text-2xl font-['EB Garamond'] text-center max-w-3xl mb-12"
      >
        Explore a cosmic blend of knowledge and excitement at our Astronomy Club events. From captivating stargazing nights to informative workshops and celestial competitions, join us for stellar experiences that bring the wonders of the universe closer to home.
      </p>

      {/* Event Cards in Masonry Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative bg-[#a6a7ab]/40 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
            style={{ height: `${Math.random() * (400 - 250) + 250}px` }} // Varying heights for masonry effect
          >
            <img
              src={`https://source.unsplash.com/random/800x600?space&sig=${index}`}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
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
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
