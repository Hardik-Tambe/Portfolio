import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import moon from '../Assets/moonicon.png';
import sun from '../Assets/sunicon.png';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('');

 

  const handleSetActive = (section) => {
    console.log(section)
    setActiveSection(section);
  };
  return (
    <div className={`navbarBg sticky-top ${!darkMode ? 'navbarBgLight' : ''}`}>
      <nav className="navbar navbar-expand-md navTransparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="font_Size">
              <ScrollLink to="home" smooth={true} duration={500} className={`Logo ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleSetActive('home')} >
                Portfolio
              </ScrollLink>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between text-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 align-items-center space">
              <li className={`nav-item`}>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`nav-link ${darkMode ? 'white poppinsLight' : 'black'} ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => handleSetActive('home')}
                >
                  Home
                </ScrollLink>
              </li>
              <li className={`nav-item`}>
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={500}
                  className={`nav-link ${darkMode ? 'white poppinsLight' : 'black'} ${activeSection === 'project' ? 'active' : ''}`}
                  onClick={() => handleSetActive('project')}
                >
                  Project
                </ScrollLink>
              </li>
              <li className={`nav-item`}>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  className={`nav-link ${darkMode ? 'white poppinsLight' : 'black'} ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={() => handleSetActive('skills')}

                >
                  Skill
                </ScrollLink>
              </li>
              <li className={`nav-item`}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`nav-link ${darkMode ? 'white poppinsLight' : 'black'} ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => handleSetActive('contact')}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
            <div className={`theme ${darkMode ? 'white poppinsLight' : 'black'}`} onClick={toggleDarkMode}>
              {darkMode ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
              {darkMode ? 'Light' : 'Dark'}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
