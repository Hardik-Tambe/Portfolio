/* global $ */

import React, { useContext, useEffect } from 'react';
import 'owl.carousel';
import './ServicesStyles.css'
import ServicesData from './ServicesData.js'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { ThemeContext } from '../context/ThemeContext';
import { Link as ScrollLink} from 'react-scroll';



function Services() {
    const { darkMode } = useContext(ThemeContext);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                650: {
                    items: 2,
                },
                850: {
                    items: 3,
                },
            },
        });
    }, []);
    return (
        <div className="section2 service" >
            <div className="container" data-aos="fade-up">
                <div className="section_header" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
                    <h6 className="section_sub_title text-center fs-1">MY SERVICES</h6>
                    <h5 className={` text-center ${darkMode ? "white" : "black"}`}>Perfect Services to Build Extraordinary Projects</h5>
                </div>
            </div>
            <div className="container_new">
                <div className="row">
                    <div className="col">
                        <div className="owl_service owl-carousel owl-theme">
                            {ServicesData.map((value, index) => {
                                return (
                                    <div className="item" key={index} data-aos="fade-up">
                                        <div className={`service_inner_block ${darkMode ? "darkModeCards" : ""}`}>
                                            <img src={value.img} alt="" />
                                            <div className="icon_img">
                                                <img src={value.icon} alt="" />
                                            </div>
                                            <div className="service_content">
                                                <h4 className={`  ${darkMode ? "white" : "black"}`}>{value.heading}</h4>
                                                <p className=' mb-5'>{value.description}</p>
                                                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                                                <Link to={`/service/${value.id}`} className={` getService ${darkMode ? "white" : "black"}`}>GET SERVICE  <FaArrowRight size={15} color="#5c30ee" /></Link>
                                                </ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services