import { motion } from 'framer-motion';
import React from 'react';
import '../myreason/myreason.css';


function Myreason() {
    return (
        <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}>
            <div className='wrapperall'>
                <div className='container'>
                    <div className='reason-wrapper'>
                    <section>
                            <h1 className='item'>My Reason</h1>
                            <h6 className='item_content'><p>By joining IEEE (IT), I can be closer to my big dream and fulfill my goals in life. In which it is to be a full-stack web developer. To achieve this, I’ve planned which path I’ll choose. Firstly, I’ll master the front end, I’ve done so since the beginning of January this year.</p>
                            At that moment, I realized that this is my passion, designing and coding. Since then, I’ve learned the basics of HTML, CSS, JS, and a few frameworks such as React, Material UI, and Bootstrap. Other than this, I hope that by joining IEEE I will get experiences in many sectors of IT, several new soft skills and improve on the existing ones, and hopefully build networks that have the same goals and dreams as mine.
                            </h6>
                    </section>
                    <section>
                        <h1 className='item'>Dream Team</h1>
                        <h6 className='item_content'>My dream team (Frontend) consists of four or more people. One senior developer with more experience to help solve an advanced problem that could occur and in charge of managing and supervising the project flow. Three people will be in charge of making designs and the necessary components. 
                        My role in this dream team is as a senior developer. I want to help others and lead the project flow. But for now, because I'm still learning the basic, I want to be a staff or an intern because I want to learn from those who are more experienced</h6>
                    </section>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// homepage.propTypes = {

// }

export default Myreason
