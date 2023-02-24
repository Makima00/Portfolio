import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer } from '../../utils/motion'
import css from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>

                {/* upper elements */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className="primaryText">
                        Hello!<br /> I'm Mello
                    </motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", 0.2, 1)}
                        className="secondaryText">
                        I design beautifull simple<br /> things, And I love what I do
                    </motion.span>
                </div>

                {/* person image */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={fadeIn("up", "tween", 0.5, 1.2)}
                        src="./person.png" alt="Image de Mello" />
                </motion.div>

                {/* email */}
                <motion.a
                    variants={fadeIn("right", "tween", 0.5, 0.5)}
                    className={css.email} href="mailto:makimam492@gmail.com">
                    makimam492@gmail.com
                </motion.a>

                {/* lower elements */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={css.experience}>
                        <div className="primaryText">3</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experiences</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", 0.5, 1)}
                        className={css.certificate}>
                        <img src="./certificate.png" alt="Image du certificat" />
                        {/* <span>CERTIFICATED PROFETIONAL</span> */}
                        <span>FULLSTACK JS</span>
                    </motion.div>
                </div>
            </motion.div>

        </section >
    )
}

export default Hero