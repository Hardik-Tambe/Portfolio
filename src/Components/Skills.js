import React, { useContext, useEffect } from 'react';
import './SkillsStyles.css';
import { ThemeContext } from '../context/ThemeContext';
import Aos from 'aos';
import { Link as ScrollLink} from 'react-scroll';


const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
    <section className="skills mtop background2"  data-aos="fade-up">
      <div className="container">
      <div className=" flex">
        <div className="leftt">
          {/* <div className="heading"> */}
            {/* <div className="heading_top flex">
              <div className="line"></div>
              <div className="line line2"></div>
              <i className="fas fa-circle"></i>
              <h3>Expertise</h3>
            </div> */}
            <div className="heading_bottom">
              <h1 className='skillsTitle'>My Skills</h1>
            </div>
          {/* </div> */}

          <div className="text">
            <h3 className={`${darkMode?"white":"black"}`}>Every Day is a New Challenge</h3>
            <p className={`${darkMode?"white":"black"}`}>In the fast-paced world of technology, I thrive on tackling new challenges and learning from each experience. Each day presents an opportunity to push the boundaries of my knowledge and skills. Whether it's solving complex problems, or collaborating with diverse teams, I embrace every challenge with enthusiasm and determination.</p>
            <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={1000}
                  // className={`nav-link ${darkMode ? 'white poppinsLight' : 'black'} ${activeSection === 'contact' ? 'active' : ''}`}
                  // onClick={() => handleSetActive('contact')}
                >
                  <button className={`glow-on-hover ${darkMode?"glow-on-hover-dark":""}`} type="button">Hire Me</button>
                </ScrollLink>
            
          </div>
        </div>

        <div className="rightt">
          {/* Line skill bars */}
          <div className="line_content">
            <div className="line flex1">
              <p className={`mb-0 mt-4 ${darkMode?"white":"black"}`}>HTML</p>
              <div className="bar">
                <div className="line_bar html"></div>
              </div>
              <h5 className={`${darkMode?"white":"black"}`}>85</h5>
            </div>

            <div className="line">
              <p className={`mb-0 mt-4 ${darkMode?"white":"black"}`}>CSS</p>
              <div className="bar">
                <div className="line_bar css"></div>
              </div>
              <h5 className={`${darkMode?"white":"black"}`}>75</h5>
            </div>
            <div className="line">
              <p className={`mb-0 mt-4 ${darkMode?"white":"black"}`}>BOOTSTRAP</p>
              <div className="bar">
                <div className="line_bar bootstrap"></div>
              </div>
              <h5 className={`${darkMode?"white":"black"}`}>80</h5>
            </div>
            <div className="line">
              <p className={`mb-0 mt-4 ${darkMode?"white":"black"}`}>JAVASCRIPT</p>
              <div className="bar">
                <div className="line_bar photo"></div>
              </div>
              <h5 className={`${darkMode?"white":"black"}`}>65</h5>
            </div>
          </div>
          {/* Line skill bars */}

          <div className="skill-container flex1"  data-aos="fade-up">
            <div className="circle_box">
              <svg className="skill-circle" height="150" width="130">
                <circle cx="-40" cy="10" r="48" style={{ strokeDasharray: '264px' }} transform="translate(50,50) rotate(-90)"></circle>
                <text x="40" y="100" fill={`${darkMode?"#fff":"#000"}`} fontFamily="Verdana" fontSize="28">80</text>
              </svg>
              <h4 className={`${darkMode?"white":"black"}`}>REACT JS</h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="130">
                <circle cx="-40" cy="10" r="48" style={{ strokeDasharray: '180px' }} transform="translate(50,50) rotate(-90)"></circle>
                <text x="40" y="100" fill={`${darkMode?"#fff":"#000"}`} fontFamily="Verdana" fontSize="28">60</text>
              </svg>
              <h4 className={`${darkMode?"white":"black"}`}>NODE JS</h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="130">
                <circle cx="-40" cy="10" r="48" style={{ strokeDasharray: '180px' }} transform="translate(50,50) rotate(-90)"></circle>
                <text x="40" y="100" fill={`${darkMode?"#fff":"#000"}`} fontFamily="Verdana" fontSize="28">60</text>
              </svg>
              <h4 className={`${darkMode?"white":"black"}`}>EXPRESS JS</h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="130">
                <circle cx="-40" cy="10" r="48" style={{ strokeDasharray: '210px' }} transform="translate(50,50) rotate(-90)"></circle>
                <text x="40" y="100" fill={`${darkMode?"#fff":"#000"}`} fontFamily="Verdana" fontSize="28">70</text>
              </svg>
              <h4 className={`${darkMode?"white":"black"}`}>MONGO DB</h4>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Skills;
