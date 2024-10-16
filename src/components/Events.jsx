import React, { useEffect } from 'react';
import eventsImage from '../assets/events.png'; // Import the image

const Events = () => {
  useEffect(() => {
    const eventsHeading = document.getElementById('events-heading');
    const eventsDescription = document.getElementById('events-description');
    eventsHeading.classList.add('animate-fade-in');
    eventsDescription.classList.add('animate-fade-in');
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0 z-0"
        src={eventsImage}
        alt="Events"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-80 z-0" />

      {/* Events Heading */}
      <h1
        id="events-heading"
        className="relative z-10 text-yellow-300 text-5xl lg:text-6xl font-bold font-['EB Garamond'] text-center mb-8"
      >
        EVENTS
      </h1>

      {/* Text Description */}
      <p
        id="events-description"
        className="relative z-10 text-white text-lg lg:text-2xl font-light text-center max-w-4xl mb-12"
      >
        Discover and register for our upcoming events or relive the excitement of our past ones.
      </p>

      {/* Upcoming Events Section */}
      <div className="relative z-10 w-full max-w-7xl mb-16">
        <h2 className="text-yellow-300 text-3xl lg:text-4xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-800 to-indigo-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">Event Title {index + 1}</h3>
              <p className="mb-4">Event Date: {new Date().toLocaleDateString()}</p>
              <p className="mb-6">Description of the upcoming event.</p>
              <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-300">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="relative z-10 w-full max-w-7xl mb-16">
        <h2 className="text-yellow-300 text-3xl lg:text-4xl font-semibold mb-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">Event Title {index + 1}</h3>
              <p className="mb-4">Event Date: {new Date().toLocaleDateString()}</p>
              <p className="mb-6">Summary of the past event.</p>
            </div>
          ))}
        </div>
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

export default Events;
