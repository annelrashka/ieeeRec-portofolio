import React from 'react';
import './homepage.css';
import Hero from '../homepage/hero.svg';


function Homepage() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 " data-aos="fade-up" data-aos-delay="200">
                    <h1>Hi! I'm Annel Rashka Perdana</h1>
                    <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img ml-0  " data-aos="zoom-in" data-aos-delay="200">
                        <img src={Hero} className="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Homepage
