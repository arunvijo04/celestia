import React from 'react';
import contactImage from '../assets/contact.png'; // Import the contact image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center px-4 md:px-6 lg:px-12">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={contactImage}
        alt="Contact"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" /> {/* Darker overlay */}

      {/* Contact Us Heading */}
      <div className="relative z-10 text-white text-center text-4xl md:text-5xl lg:text-6xl font-bold font-['Bebas Neue'] tracking-widest mt-8 mb-6">
        CONTACT US
      </div>

      {/* Contact Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl lg:space-x-8 space-y-8 lg:space-y-0">

        {/* Embed Google Map */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
          <iframe
            title="Rajagiri School of Engineering and Technology"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3480956987487!2d76.32963251413456!3d9.965190593874227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b77eb6729db%3A0x629de0923371d54c!2sRajagiri%20School%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1693062443444!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <form className="w-full lg:w-1/2 bg-[#1b1b2a] bg-opacity-90 rounded-lg p-6 md:p-8 shadow-lg">
          <div className="flex flex-col gap-6">
            <label className="text-[#dcdcdc] text-lg md:text-xl font-semibold font-['EB Garamond']">
              NAME
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-10 bg-transparent border-b-2 border-[#f0e68c] focus:outline-none focus:border-[#f0e68c] placeholder-gray-500"
              />
            </label>

            <label className="text-[#dcdcdc] text-lg md:text-xl font-semibold font-['EB Garamond']">
              EMAIL
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 bg-transparent border-b-2 border-[#f0e68c] focus:outline-none focus:border-[#f0e68c] placeholder-gray-500"
              />
            </label>

            <label className="text-[#dcdcdc] text-lg md:text-xl font-semibold font-['EB Garamond']">
              MOBILE NO
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full h-10 bg-transparent border-b-2 border-[#f0e68c] focus:outline-none focus:border-[#f0e68c] placeholder-gray-500"
              />
            </label>

            <label className="text-[#dcdcdc] text-lg md:text-xl font-semibold font-['EB Garamond']">
              MESSAGE
              <textarea
                placeholder="Your message"
                className="w-full h-24 bg-transparent border-b-2 border-[#f0e68c] focus:outline-none focus:border-[#f0e68c] placeholder-gray-500"
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#f0e68c] text-black text-lg md:text-xl font-semibold font-['EB Garamond'] rounded-md hover:bg-[#dcdcdc] transition duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Handles */}
      <div className="relative z-10 flex space-x-4 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#f0e68c] hover:text-[#dcdcdc] transition duration-300">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#f0e68c] hover:text-[#dcdcdc] transition duration-300">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#f0e68c] hover:text-[#dcdcdc] transition duration-300">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#f0e68c] hover:text-[#dcdcdc] transition duration-300">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 w-full text-white text-center text-sm md:text-lg p-4 bg-black bg-opacity-60 mt-8">
        <p>&copy; {new Date().getFullYear()} Astronomy Club RSET</p>
        <p>Designed by Arun Vijo</p>
      </footer>
    </div>
  );
};

export default Contact;
