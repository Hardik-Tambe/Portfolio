import React, { useContext, useEffect } from 'react'
import './Experience.css'
import Aos from 'aos';
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <section className="experience background2" data-aos="fade-up">
    <div className="container">
      <div className=" center">
        {/* <div className="heading_top flex"> */}
          {/* <div className="line"></div>
          <div className="line line2"></div>
          <i className="fas fa-circle"></i> */}
          {/* <h3> Employment & Education</h3> */}
        {/* </div> */}
        <div className="heading_bottom my-5">
          <h1 className='fs-1 mb-0'>Employment & Course </h1>
        </div>
      </div>


      <div className="content flex">
        {/* <div className="left">
          <img src="image/e.jpg" alt="" />
        </div> */}
        <div className="rightt">
          <div className="timeline">
            <div className="line">
            </div>
            <div className="content content-1">
              <section>
                <i className="icon fas fa-briefcase"></i>
                <div className="details">
                  <span>Nov 2023 - May-2024</span>
                  <h3 className={`${darkMode?"white":"black"}`}>MERNSTACK Developer Trainee</h3>
                </div>
                <p className={`${darkMode?"white":"black"}`}> As a MERN Stack Developer Trainee at NIRVANA TECH LABS for the past six months, I have gained hands-on experience in building full-stack applications, honing my skills in MongoDB, Express.js, React, and Node.js. This intensive training has equipped me with the ability to develop efficient, scalable, and robust web solutions.</p>
              </section>
            </div>

            <div className="content content-1">
              <section>
              <i className="icon fas fa-book-open"></i>
                <div className="details">
                  <span> April 2023- Sept 2023</span>
                  <h3 className={`${darkMode?"white":"black"}`}>FRONTEND Development Certificate Course</h3>
                </div>
                <p className={`${darkMode?"white":"black"}`}>During my Frontend Development course at Virash Training Institute, I acquired practical expertise in creating responsive and dynamic web interfaces. This comprehensive training program enhanced my proficiency in HTML, CSS, JavaScript, and popular frameworks, empowering me to deliver user-friendly and visually appealing web applications.</p>
              </section>
            </div>

            {/* <div className="content content-1">
              <section>
              <i className="icon fas fa-graduation-cap"></i>
                <div className="details">
                  <span> 2015 - 2018</span>
                  <h3>BSc-IT</h3>
                </div>
                <p>I graduated with a Bachelor of Science in Information Technology (B.Sc. IT) from NB Mehta College, affiliated with Mumbai University.</p>
              </section>
            </div>

            <div className="content content-1">
              <section>
                <i className="icon fab fa-acquisitions-incorporated"></i>
                <div className="details">
                  <span> 2013 - 2015</span>
                  <h3>HSC</h3>
                </div>
                <p>I completed my Higher Secondary Certificate (HSC) from MBBI Junior College under the Maharashtra Board.</p>
              </section>
            </div> */}
          </div>
        </div>
      </div>
      </div>
  </section>
  )
}

export default Experience