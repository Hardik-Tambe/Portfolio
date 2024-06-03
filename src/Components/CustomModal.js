// CustomModal.js
import React, { useContext } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
import { ThemeContext } from '../context/ThemeContext';

const CustomModal = ({ isOpen, onRequestClose, project }) => {
  const { darkMode } = useContext(ThemeContext);

  if (!project) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      {/* <button onClick={onRequestClose} className="close-button">&times;</button> */}
      <img src={project.imgsrc} alt={project.title} className="modal-image" />
      <div className='modal-pro-details'>
      <h2 className={`${darkMode?"white":"black"}`}>{project.title}</h2>
      <p className={`${darkMode?"white":"black"}`}>{project.text}</p>
      <div className="modal-buttons">
        <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
        <a href={project.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
      </div>

      </div>
    </Modal>
  );
};

export default CustomModal;
