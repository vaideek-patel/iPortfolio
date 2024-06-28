import React from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Intial from './Intial.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Testimonials from './Testimonials.jsx';

const HomePage = () => {
  return (
    <div>
      <div id="home">
        <Intial />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
