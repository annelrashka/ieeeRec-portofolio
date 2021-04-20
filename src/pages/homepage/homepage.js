import React from 'react';
import './homepage.css';
import Hero from '../homepage/hero.svg';
import { motion } from 'framer-motion';


function Homepage() {
    return (
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}
        >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 " data-aos="fade-up" data-aos-delay="200">
                        <h1>Hi! I'm Annel Rashka Perdana</h1>
                        <h2>an undergraduate student at School Of Electrical Engineering And Informatics, Bandung Institute Of Technolgy. I love to do anything that related to coding, editing, and designing. I'm also like to discuss about science, especially in astronomy and physics</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img ml-0  " data-aos="zoom-in" data-aos-delay="200">
                            <img src={Hero} className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}


export default Homepage
