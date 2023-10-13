/* global $ */

import React, { useEffect } from 'react';
import 'owl.carousel';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import Services from '../Components/Services';
// import ServicesData from '../Components/ServicesData'; // Add this line

const About = () => {

  useEffect(() => {
    // Initialize Owl Carousel when the "About" component mounts
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
      },
    });
  }, []);

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
