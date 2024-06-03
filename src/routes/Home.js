import React from 'react';
import Navbar from '../Components/Navbar';
import HeroImg from '../Components/HeroImg';
import Footer from '../Components/Footer';
import Work from '../Components/Work';
import Clients from '../Components/Clients';
import Services from '../Components/Services';
import Skills from '../Components/Skills';
import Form from '../Components/Form';
import Experience from '../Components/Experience';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroImg />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="project">
        <Work />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="contact">
        <Form />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
