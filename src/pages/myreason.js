import { motion } from 'framer-motion'
import React from 'react'



const Myreason = props => {
    return (
        <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}>
            <h1>ini my reason page</h1>
        </motion.div>
    )
}

// homepage.propTypes = {

// }

export default Myreason
