import React from 'react'
import './ServicesStyles.css'
import ServicesData from './ServicesData.js'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="section2 service">
            <div className="container">
                <div className="section_header" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
                    <h6 className="section_sub_title text-center fs-1">MY SERVICES</h6>
                    <h1 className="section_title clr fs-2 text-center">Perfect Services to Build Extraordinary Projects</h1>
                </div>
            </div>
            <div className="container_new">
                <div className="row">
                    <div className="col">
                        <div className="owl_service owl-carousel owl-theme">
                            {ServicesData.map((value, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="service_inner_block">
                                            <img src={value.img} alt="" />
                                            <div className="icon_img">
                                                <img src={value.icon} alt="" />
                                            </div>
                                            <div className="service_content">
                                                <h4 className='text-white'>{value.heading}</h4>
                                                <p className='fs-6'>{value.description}</p>
                                                <Link to={`/service/${value.id}`}>GET SERVICE  <FaArrowRight size={15} color="#FFA903" /></Link>

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