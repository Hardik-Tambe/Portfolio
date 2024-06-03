import React, { useContext, useEffect, useState } from 'react';
import './HeroImgStyles.css';
import { ThemeContext } from '../context/ThemeContext';

const HeroImg = () => {
  const text = 'MERNSTACK Developer'; // Text to animate
  const [animatedText, setAnimatedText] = useState('');
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setAnimatedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the beginning
        setAnimatedText('');
      }
    }, 200); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='hero'>
      <div className='mask'>
        {/* <img
          className='into-img'
          src={IntroImg}
          alt='IntroImg'
        /> */}
      </div>
      <div className='content'>
        <p className={`${darkMode ? "white" : "black"}`}>HI, I'M HARDIK.</p>
        <h1 className='fontSize'>
          {animatedText}
          <span className="blinking-cursor">|</span>
        </h1>
        <div>
          <a href="/resume.pdf" download="Hardik_Resume.pdf" className={`btn ${darkMode ? "white" : "black"}`}>
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
