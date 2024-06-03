import './FooterStyles.css'

import React, { useContext, useEffect, useState } from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAngleUp } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll animation
        });
    };

    return (
        <div className= {`footerr ${darkMode?"footerDarkBg":""}`}>
            <div className='footer-container'>
                <div className='left'>
                    <h2 className={` ${darkMode?"white":"black"}`}>Address</h2>
                    <div className='location'>
                        <FaHome
                            className={`icon ${darkMode?"grayClr":""}`}
                            size={20}
                            style={{  marginRight: "2rem" }} />
                            <p className={`mb-0 ${darkMode?"grayClr":""}`}>Umbergaon, Gujarat </p>
                    </div>
                    <div className='phone'>
                        <p className={`${darkMode?"grayClr":""}`}>
                            <FaPhone
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={20}
                                style={{  marginRight: "2rem" }} />
                            +91 85117 31099
                        </p>
                    </div>
                    <div className='email'>
                        <p className={`${darkMode?"grayClr":""}`}>
                            <FaMailBulk
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={20}
                                style={{  marginRight: "2rem" }} />
                            hardiktambe09@gmail.com
                        </p>
                    </div>
                </div>

                <div className='mid'>
                    <h2 className={` ${darkMode?"white":"black"}`}>My Services</h2>
                        <Link className={`${darkMode?"grayClr":""}`}>Responsive Web Design</Link>
                        <Link className={`${darkMode?"grayClr":""}`}>User Interface (UI) Design</Link>
                        <Link className={`${darkMode?"grayClr":""}`}>Frontend Development</Link>
                        <Link className={`${darkMode?"grayClr":""}`}>Cross-Browser Compatibility</Link>
                        <Link className={`${darkMode?"grayClr":""}`}>Performance Optimization</Link>
                </div>

                <div className='right'>
                    <h2 className={` ${darkMode?"white":"black"}`}>About the company</h2>
                    <p className={`${darkMode?"grayClr":""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className='social'>
                        <NavLink to={"https://www.facebook.com/hardik.tambe/"} target="_blank">
                            <FaFacebook
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={30}
                                style={{color:"#927dfa", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://twitter.com/i/flow/login"} target="_blank">
                            <FaTwitter
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={30}
                                style={{color:"#927dfa", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://www.linkedin.com/in/hardik-tambe-b8345a291/"} target="_blank">
                            <FaLinkedin
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={30}
                                style={{color:"#927dfa",  marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/hardik_2506/"} target="_blank">
                            <FaInstagram
                                className={`icon ${darkMode?"grayClr":""}`}
                                size={30}
                                style={{color:"#927dfa", marginRight: "1rem" }} />
                        </NavLink>
                        <div
      className={`scroll-up-button ${isVisible ? 'visible' : ''} ${darkMode?"":"scroll-up-button-dark"}`}
      onClick={scrollToTop}
    >
      <FaAngleUp size={25}/>
    </div>
                    </div>
                </div>
                {/* <div className='top'>
                
                </div> */}
            </div>
        </div>
    )
}

export default Footer