// WorkCard.js
import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import './WorkCardStyles.css';
import { ThemeContext } from '../context/ThemeContext';

const WorkCard = (props) => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='project-card' onClick={props.onClick}>
      <img src={props.imgsrc} alt='pro1' />
      <div className='px-3'>
        <h2 className={`project-title ${darkMode?"white":"black"}`}>{props.title}</h2>
      </div>
    </div>
  );
};

export default WorkCard;
