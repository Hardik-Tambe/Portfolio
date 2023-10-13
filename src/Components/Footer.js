import './FooterStyles.css'

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll animation
        });
    };

    return (
        <div className='footerr'>
            <div className='footer-container'>
                <div className='left'>
                    <h2>Address</h2>
                    <div className='location'>
                        <FaHome
                            className='icon'
                            size={20}
                            style={{ color: "#fff", marginRight: "2rem" }} />
                            <p>Umbergaon, Gujarat </p>
                    </div>
                    <div className='phone'>
                        <p>
                            <FaPhone
                                className='icon'
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 85117 31099
                        </p>
                    </div>
                    <div className='email'>
                        <p>
                            <FaMailBulk
                                className='icon'
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }} />
                            hardiktambe09@gmail.com
                        </p>
                    </div>
                </div>

                <div className='mid'>
                    <h2>My Services</h2>
                        <Link>Responsive Web Design</Link>
                        <Link>User Interface (UI) Design</Link>
                        <Link>Frontend Development</Link>
                        <Link>Cross-Browser Compatibility</Link>
                        <Link>Performance Optimization</Link>
                </div>

                <div className='right'>
                    <h2>About the company</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className='social'>
                        <NavLink to={"https://www.facebook.com/hardik.tambe/"} target="_blank">
                            <FaFacebook
                                className='icon'
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://twitter.com/i/flow/login"} target="_blank">
                            <FaTwitter
                                className='icon'
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://www.linkedin.com/in/hardik-tambe-b8345a291/"} target="_blank">
                            <FaLinkedin
                                className='icon'
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/hardik_2506/"} target="_blank">
                            <FaInstagram
                                className='icon'
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <button className="scroll-to-top-button" onClick={scrollToTop}>
                        <FaArrowUp />
                        </button>
                    </div>
                </div>
                {/* <div className='top'>
                
                </div> */}
            </div>
        </div>
    )
}

export default Footer