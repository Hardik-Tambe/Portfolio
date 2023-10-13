import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Work from '../Components/Work'
import PricingCards from '../Components/PricingCards'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Project