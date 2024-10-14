import React from 'react';
import contactImage from '../assets/contact.png'; // Import the contact image

const Contact = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={contactImage}
        alt="Contact"
      />

      {/* Overlay */}
      <div className="w-full h-full absolute opacity-50 bg-black" /> {/* Darker overlay */}

      {/* Contact Us Heading */}
      <div className="absolute left-1/2 top-[5%] transform -translate-x-1/2 text-white text-5xl font-bold font-['EB Garamond'] tracking-widest">
        CONTACT US
      </div>

      {/* Flex Container for Get In Touch Section */}
      <div className="absolute left-[20%] top-[20%] w-[60%] z-10">
        {/* Get In Touch Section */}
        <div className="text-white text-4xl font-semibold font-['EB Garamond'] mb-4">
          GET IN TOUCH
        </div>

        {/* Divider Line */}
        <div className="w-[150px] h-[2px] bg-white mb-4" /> {/* White underline for "Get in Touch" */}

        {/* Flex Container for Map and Form */}
        <div className="flex w-full z-10">
          {/* Embed Google Map */}
          <div className="w-[50%] h-[400px] mr-8"> {/* Set width for the map and add margin-right */}
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
          <form className="w-full max-w-[400px] bg-[#d9d9d9] bg-opacity-90 rounded-lg p-8">
            <div className="flex flex-col gap-6">
              <label className="text-[#1e1e1e] text-xl font-semibold font-['EB Garamond']">
                NAME
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-10 bg-transparent border-b-2 border-[#65558f] focus:outline-none focus:border-[#65558f] placeholder-gray-500"
                />
              </label>

              <label className="text-[#1e1e1e] text-xl font-semibold font-['EB Garamond']">
                EMAIL
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-10 bg-transparent border-b-2 border-[#65558f] focus:outline-none focus:border-[#65558f] placeholder-gray-500"
                />
              </label>

              <label className="text-[#1e1e1e] text-xl font-semibold font-['EB Garamond']">
                MOBILE NO
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full h-10 bg-transparent border-b-2 border-[#65558f] focus:outline-none focus:border-[#65558f] placeholder-gray-500"
                />
              </label>

              <label className="text-[#1e1e1e] text-xl font-semibold font-['EB Garamond']">
                MESSAGE
                <textarea
                  placeholder="Your message"
                  className="w-full h-24 bg-transparent border-b-2 border-[#65558f] focus:outline-none focus:border-[#65558f] placeholder-gray-500"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-[#65558f] text-white text-xl font-semibold font-['EB Garamond'] rounded-md hover:bg-[#5a4b88] transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-center text-lg p-4 bg-black bg-opacity-50 w-full">
        <p>&copy; {new Date().getFullYear()} Astronomy Club RSET</p>
        <p>Designed by Arun Vijo</p>
      </footer>
    </div>
  );
};

export default Contact;
