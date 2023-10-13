
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import Services from '../Components/Services';
// import ServicesData from '../Components/ServicesData'; // Add this line

const About = () => {

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End-Developer." />
      <AboutContent />
      <Services />
      <Footer />
    </div>
  );
}

export default About;
