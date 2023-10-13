import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from '../Components/Work'
import Clients from '../Components/Clients'
import Services from '../Components/Services'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Services />
      <Work />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home