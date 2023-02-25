import { motion } from 'framer-motion';
import React from 'react';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './Footer.module.scss';

const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <motion.div
                variants={footerVariants}
                className={`innerWidth flexCenter yPaddings ${css.container}`}>

                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />amazing together together
                    </span>
                    <span className="primaryText">
                        Starting by <a href="mailto:makimam@gmail.com">saying hi</a>
                    </span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>LOT 7653-42897</p>
                    </div>
                    <div className={css.menu}>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experiences</li>
                    </div>
                </div>

            </motion.div>


        </motion.section>
    )
}

export default Footer