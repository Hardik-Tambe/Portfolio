import React, { useEffect, useState } from 'react';
import './HeroImgStyles.css';
import IntroImg from '../Assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  const text = 'React Developer'; // Text to animate
  const [animatedText, setAnimatedText] = useState('');

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
        <img
          className='into-img'
          src={IntroImg}
          alt='IntroImg'
        />
      </div>
      <div className='content'>
        <p>HI, I'M HARDIK.</p>
        <h1 className='fontSize'>
          {animatedText}
          <span className="blinking-cursor">|</span>
        </h1>
        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
