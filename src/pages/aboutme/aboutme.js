import React from 'react';
import './aboutme.css';
import { motion } from 'framer-motion';



function Aboutme() {
    return (
        <motion.div

        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}
        >
        <section id="swot" className="swot section-bg d-flex align-items-center">
            <div className="container" data-aos="fade-up">

                <div className="section-title text-center">
                <h2 className="title">SWOT Analytics</h2>
                </div>

                <div className="row">
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                    <h4>Strengths</h4>
                    <p>Dedication</p>
                    <p>Focus</p>
                    <p>Curious</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-file"></i></div>
                    <h4>Weaknesses</h4>
                    <p>Deadline-er</p>
                    <p>Reactive</p>
                    <p>Reckles</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                    <h4>Opportunities</h4>
                    <p>Proggresive</p>
                    <p>Know more</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-layer"></i></div>
                    <h4>Threats</h4>
                    <p>Overwhelmed</p>
                    <p>Often make mistakes</p>
                    </div>
                </div>

                </div>

            </div>
        </section>
        <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title text-center">
            <h2 className="title">Resume</h2>
          </div>
  
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Annel Rashka Perdana</h4>
                <p>I'm kind of person that like to questioning everything, if anything doesn't seems make sense, I'll keep searching until it's make sense to me. My biggest goal in life is to be a fullstack web-developer. To achieve this i need to master 2 things, frontend and backend. I started learning web-development ini January 2021. So far, i've learned basic HTML,CSS, and Javascript</p>
              </div>
  
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bandung Institute of Technology</h4>
                <h5>2020 - Present</h5>
                <p><em>School Of Electrical Engineering And Informatics</em></p>
                <p>
                  <ul>
                    <li>Member of Unit Budaya Lampung</li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>SMAN 1 Gadingrejo</h4>
                <h5>2017 - 2019</h5>
                <p><em>Mathematics And Science</em></p>
                <p>
                  Achievement :
                  <ul>
                    <li>Acceleration Program</li>
                    <li>Finalist in Olimpiade Fisika ITERA 4 2018</li>
                    <li>Finalist in Olimpiade Fisika Himafi UNILA 2018</li>
                    <li>Best Film Editor in Gebyar Seni Smanding 2018</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Frontend Web-Developer</h4>
                <h5>Marc 2021 - Present</h5>
                <p><em>IMPACT STEI 2021 </em></p>
                <p>
                Key Contribution :
                <ul>
                  <li>Tasked to make an Impact's homepage website with React and material UI</li>
                  
                </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Frontend Web-Developer</h4>
                <h5>Feb 2021 - Apr 2021</h5>
                <p><em>Perayaan Wisuda April 2021</em></p>
                <p>
                Key Contribution:
                <ul>
                  <li>Tasked to build homepage's HTML,CSS</li>
                  <li>Tasked to build Wispril's Organogram</li>
                </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Vice Leader Of Virtual Exhibition Sub-Division</h4>
                <h5>Nov 2020 - Jan 2021</h5>
                <p><em>Refleksi Akbar KM-ITB</em></p>
                <p>
                <ul>
                  <li>Tasked to make an online exhibition concept for celebrating KM-ITB's 25 anniversary</li>
                  <li>Successfully gathered 600 viewers</li>
                </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Head Of Lampung Cultural Exhibition</h4>
                <h5>Oct 2020 - Nov 2020</h5>
                <p><em>Unit Budaya Lampung ITB</em></p>
                <p>
                <ul>
                  <li>Tasked to make an online exhibition concept for promoting Lampung's culture</li>
                  <li>Lead team of 50 people</li>
                  <li>Making an organizational committee</li>
                  <li>Successfully gathered 1171 viewers</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      </motion.div>
    )
}



export default Aboutme
