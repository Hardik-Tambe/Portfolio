// Work.js
import React, { useState, useEffect } from 'react';
import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import CustomModal from './CustomModal';
import Phone3 from '../Assets/phone3.png';
import Aos from 'aos';

const Work = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className='work-container' data-aos="fade-up">
      <h1 className='project-heading fs-1'>PROJECTS</h1>
      <div className='project-container'>
        {WorkCardData.map((value, i) => {
          return (
            <WorkCard 
              key={i}
              aos={value.aos}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              source={value.source}
              view={value.view}
              onClick={() => handleCardClick(value)}
            />
          );
        })}
      </div>
      <div className="banner type_3">
        <div className="container-fluid">
          <div className="banner_content">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner_text">
                  <img src={Phone3} alt=""/>
                  <h1>I'm ready to serve you 24/7. Just Call me when you need</h1>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="banner_phone">
                  <h4>Call Me Anytime</h4>
                  <span>+91 85117 31099</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal isOpen={showModal} onRequestClose={handleCloseModal} project={selectedProject} />
    </div>
  );
};

export default Work;
