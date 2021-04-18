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
                <h2>SWOT Analytics</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                    <h4><a href="">Strengths</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-file"></i></div>
                    <h4><a href="">Weaknesses</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                    <h4><a href="">Opportunities</a></h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-layer"></i></div>
                    <h4><a href="">Threats</a></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                </div>

                </div>

            </div>
        </section>
        <section id="resume" className="resume">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title text-center">
            <h2>Resume</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Annel Rashka Perdana</h4>
                <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></p>
                <p>
                <ul>
                  <li>Lampung, Indonesia</li>
                  <li>081352052004</li>
                  <li>annelrashkaperdana@gmail.com</li>
                </ul>
                </p>
              </div>
  
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bandung Institute of Technology</h4>
                <h5>2020 - Present</h5>
                <p><em>School Of Electrical Engineering And Informatics</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
              </div>
              <div class="resume-item">
                <h4>SMAN 1 Gadingrejo</h4>
                <h5>2017 - 2019</h5>
                <p><em>Mathematics And Science</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Experience</h3>
              <div class="resume-item">
                <h4>Frontend Web-Developer</h4>
                <h5>Marc 2021 - Present</h5>
                <p><em>IMPACT STEI 2021 </em></p>
                <p>
                <ul>
                  <li>Key Contribution</li>
                  
                </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Frontend Web-Developer</h4>
                <h5>Feb 2021 - Apr 2021</h5>
                <p><em>Perayaan Wisuda April 2021</em></p>
                <p>
                <ul>
                  <li>Key Contribution</li>
                </ul>
                </p>
              </div>
              <div class="resume-item">
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
              <div class="resume-item">
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
