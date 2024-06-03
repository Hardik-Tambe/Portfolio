import React, { useEffect } from 'react'
import './HeroImg2Styles.css'
import AOS from "aos";

const HeroImg2 = ({heading, text}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='hero-img' data-aos="fade-up">
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImg2