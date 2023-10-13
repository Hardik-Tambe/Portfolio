/* global $ */

import React, { useEffect } from 'react';
import './ClientsStyles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import ClientsReviewData from './ClientsReviewsData';
import shadowIcon from '../Assets/shadow_icon3.png';
import { FaStar} from 'react-icons/fa';



function Client() {
    useEffect(() => {
        // Initialize Owl Carousel
        $('.owl-carousel').owlCarousel({
            items: 3, // Default number of items for larger screens
            loop: true,
            margin: 10,
            autoplay: true,
            responsive: {
                // Define responsive breakpoints
                0: {
                    items: 1, // 1 item on small screens (less than 576px)
                },
                576: {
                    items: 2, // 2 items on medium screens (576px or more)
                },
                1000: {
                    items: 3, // 3 items on larger screens (768px or more)
                },
            },
        });
    }, []);

    return (

        <div className="testimonial pd_btom_80">
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src={shadowIcon} alt="shadowIcon" /></div>
                    <h6 className="section_sub_title">Clients testimonial</h6>
                    <h1 className="section_title fontsize">What my clients say about me</h1>
                    <p className="section_desc">Crafting Seamless User Experiences.
                        Elevating Web Design with Precision.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="owl_testimonial1 owl-carousel owl-theme">
                            {ClientsReviewData.map((value, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="testibox1">
                                            <div className="testibox_inner">
                                                <div className="testi-content">
                                                    <ul>
                                                        <li className="text">Rating:</li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                    </ul>
                                                    <p>{value.description}</p>
                                                </div>
                                                <div className="testi-top">
                                                    <div className="testi-img">
                                                        <img src={value.imgsrc} alt="" />
                                                    </div>
                                                    <div className="testi-info">
                                                        <h4>{value.name}</h4>
                                                        <h6>{value.city}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
