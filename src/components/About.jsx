import React, { useEffect } from 'react';
import aboutImage from '../assets/about.png'; // Background image
import rsetImage from '../assets/rset.png'; // College image
import astronomyImage from '../assets/astronomy.png'; // Astronomy Club image

const About = () => {
  useEffect(() => {
    const elements = ['college-heading', 'college-text', 'club-heading', 'club-text'];
    elements.forEach((id) => {
      document.getElementById(id)?.classList.add('animate-fade-in');
    });
  }, []);

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center">
      {/* Background Image for the entire section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img className="w-full h-full object-cover" src={aboutImage} alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-black opacity-80"></div> {/* Cosmic gradient overlay */}
      </div>

      {/* College Section */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between my-16 px-4 md:px-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={rsetImage}
            alt="College"
            className="rounded-xl shadow-2xl w-[90%] sm:w-[75%] lg:w-[80%] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0 lg:ml-8">
          <h1
            id="college-heading"
            className="text-purple-200 text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-bold mb-4"
          >
            OUR COLLEGE
          </h1>
          <p
            id="college-text"
            className="text-white text-base md:text-lg lg:text-xl font-['Poppins'] leading-relaxed"
          >
            Rajagiri School of Engineering and Technology (RSET), situated in Kochi, is a distinguished institution that embodies the spirit of innovation and academic excellence. Established in 2001, RSET is affiliated with APJ Abdul Kalam Technological University and is renowned for its comprehensive engineering programs. The school emphasizes a balanced approach to education, blending rigorous technical training with ethical values and leadership skills. It offers undergraduate and postgraduate courses in various disciplines, including Computer Science, Electronics, and Mechanical Engineering. RSET has consistently achieved accolades for its placements and research initiatives, fostering an environment conducive to learning and personal growth.
          </p>
        </div>
      </div>

      {/* Astronomy Club Section */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between my-16 px-4 md:px-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0 lg:mr-8">
          <h1
            id="club-heading"
            className="text-purple-200 text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-bold mb-4"
          >
            ABOUT OUR CLUB
          </h1>
          <p
            id="club-text"
            className="text-white text-base md:text-lg lg:text-xl font-['Poppins'] leading-relaxed"
          >
          Complementing its academic framework is the Astronomy Club, which plays a vital role in nurturing students' interest in celestial sciences. The club organizes engaging activities such as stargazing sessions, workshops, and seminars featuring guest speakers from various fields related to astronomy and space science. Through these initiatives, students gain hands-on experience with telescopes and participate in discussions about the universe's mysteries. The Astronomy Club not only enhances the academic experience at RSET but also fosters teamwork, critical thinking, and a sense of wonder, encouraging students to explore the cosmos and deepen their understanding of the universe around them.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={astronomyImage}
            alt="Astronomy Club"
            className="rounded-xl shadow-2xl w-[90%] sm:w-[75%] lg:w-[80%] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Add some star animations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
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

export default About;
