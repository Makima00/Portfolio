import { motion } from 'framer-motion';
import React from 'react'
import { fadeIn, staggerContainer } from '../../utils/motion';
import css from './Portfolio.module.scss';
const Portfolio = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <a className="enchor" id="portfolio"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">My Latest Works</span>
                        <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
                    </div>
                    <span>Explore More Works</span>
                </div>

                {/* Images */}
                <div className={`flexCenter ${css.showCase}`}>
                    <motion.img
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./showCase1.png" alt="project" />
                    <motion.img
                        variants={fadeIn("up", "tween", 0.7, 0.6)}
                        src="./showCase2.png" alt="project" />
                    <motion.img
                        variants={fadeIn("up", "tween", 0.9, 0.6)}
                        src="./showCase3.png" alt="project" />
                </div>

            </div>
        </motion.section >
    )
}

export default Portfolio