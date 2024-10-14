import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Banner from './components/Banner'; // Import the Banner component
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div id="hero" className="section">
        <Hero />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="events" className="section">
        <Events />
      </div>
      <div id="banner" className="section"> {/* Added Banner section */}
        <Banner />
      </div>
      <div id="gallery" className="section">
        <Gallery />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </Router>
  );
};

export default App;
