import React, { useEffect } from 'react';
import aboutImage from '../assets/about.png'; // Import the image

const About = () => {
  // Use effect for landing animation
  useEffect(() => {
    const aboutHeading = document.getElementById('about-heading');
    const aboutText = document.getElementById('about-text');
    aboutHeading.classList.add('animate-fade-in'); // Add landing animation class
    aboutText.classList.add('animate-fade-in'); // Add landing animation class
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6"> {/* Use flexbox for centering */}
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0 z-0" // Cover the entire div and make sure it's behind content
        src={aboutImage}
        alt="About Us"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" /> {/* Dark overlay for better text visibility */}

      {/* About Us Heading */}
      <h1
        id="about-heading" // ID for the heading effect
        className="relative z-10 text-white text-5xl lg:text-6xl font-['EB Garamond'] transition-transform duration-300 hover:scale-105 text-center mb-4"
      >
        ABOUT US
      </h1>

      {/* About Us Text */}
      <p
        id="about-text" // ID for the text effect
        className="relative z-10 text-white text-lg lg:text-xl font-['EB Garamond'] text-center max-w-4xl mb-8 transition-transform duration-300 hover:scale-105"
      >
        Empowering curiosity and fostering a passion for the cosmos, our astronomy club<br />
        at Manipal strives to create an inclusive space for students to explore the wonders of <br />
        the universe. Through stargazing events, educational outreach, and collaborative<br />
        projects, we aim to inspire a deeper appreciation for astronomy and cultivate a<br />
        community that celebrates the beauty of the night sky. Join us on a journey of <br />
        discovery as we explore the mysteries of the cosmos together.
      </p>

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

export default About;
