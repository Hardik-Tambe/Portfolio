import React, { useContext, useState } from 'react';
import './ClientsStyles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import ClientsReviewData from './ClientsReviewsData';
import shadowIcon from '../Assets/shadow_icon3.png';
// import { FaStar} from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

import teamMember1 from "../Assets/18155.jpg";
import teamMember2 from "../Assets/client.jpg";
import teamMember3 from "../Assets/1287.jpg";
import teamMember4 from "../Assets/6837.jpg";
import teamMember5 from "../Assets/27767.jpg";
import teamMember6 from "../Assets/21959.jpg";
import teamMember7 from "../Assets/45631.jpg";
import teamMember8 from "../Assets/executive-business-woman-office.jpg";
import { useEffect } from 'react';
import Aos from 'aos';



function Client() {
    const { darkMode } = useContext(ThemeContext);
    const [hoveredMember, setHoveredMember] = useState(2);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleMouseEnter = (id) => {
        setHoveredMember(id);
    };

    const handleMouseLeave = () => {
        setHoveredMember(hoveredMember);
    };


    return (

        <div className="testimonial pd_btom_80" data-aos="fade-up">
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src={shadowIcon} alt="shadowIcon" /></div>
                    <h6 className="section_sub_title" >Clients testimonial</h6>
                    <h1 className="section_title fontsize">What my clients say about me</h1>
                    <p className="section_desc">Crafting Seamless User Experiences.
                        Elevating Web Design with Precision.</p>
                </div>



                <div className="ourTeamContainer" data-aos="fade-up">

                    <div className="teamTopImagesFlex">
                        <div className="teamMember firstMember">
                            <img src={teamMember1} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 1 ? "imgTransform" : ""}
                            />
                        </div>
                        <div className="teamMember secondMember">
                            <img src={teamMember2} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 2 ? "imgTransform" : ""}
                            />
                        </div>
                        <div className="teamMember thirdMember">
                            <img src={teamMember3} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 3 ? "imgTransform" : ""}
                            />
                        </div>
                    </div>
                    <div className="teamMiddleFlex">
                        <div className="teamMember eightMember">
                            <img src={teamMember8} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(8)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 8 ? "imgTransform" : ""}
                            />
                        </div>

                        {ClientsReviewData.map((member) => (
                            <div className={`aboutMember ${darkMode ? "changeShadow" : ""}`} style={{
                                display: hoveredMember === member.id ? "block" : "none",
                            }}>
                                <div className="memberName">
                                    <h2 className={`mb-0 ${darkMode ? "white poppinsLight" : ""}`}>
                                        {member.name}
                                    </h2>
                                </div>
                                <h6 className={`${darkMode ? "white poppinsLight" : ""}`}>
                                    {member.city}
                                </h6>
                                <p className={`${darkMode ? "teamInfoDarkClr" : ""}`}>
                                    {member.details}
                                </p>
                            </div>
                        ))}
                        <div className="teamMember fourthMember">
                            <img src={teamMember4} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 4 ? "imgTransform" : ""}
                            />
                        </div>
                    </div>
                    <div className="teamTopImagesFlex teamBottom">
                        <div className="teamMember seventhMember">
                            <img src={teamMember7} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(7)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 7 ? "imgTransform" : ""}
                            />
                        </div>
                        <div className="teamMember sixthMember">
                            <img src={teamMember6} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(6)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 6 ? "imgTransform" : ""}
                            />
                        </div>
                        <div className="teamMember fifthMember">
                            <img src={teamMember5} alt="teamMember"
                                onMouseEnter={() => handleMouseEnter(5)}
                                onMouseLeave={handleMouseLeave}
                                className={hoveredMember === 5 ? "imgTransform" : ""}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
