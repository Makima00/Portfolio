import { motion } from 'framer-motion';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import { comments, sliderSettings } from '../../utils/data';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './People.module.scss';

const People = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <a className="enchor" id="people"></a>
            <motion.div
                variants={footerVariants}
                className={`ypaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">People Talk About us </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga ad, impedit, corporis vero, enim itaque recusandae rerum veritatis officia officiis repellendus modi alias illo quibusdam repellat neque facilis nemo!</p>
                </div>

                {/* caroussel */}
                <div className={`yPaddings ${css.comments}`}>
                    <Slider
                        {...sliderSettings}
                        className={css.slider}>

                        {comments.map((comment, i) => {
                            return (
                                <div className={css.comment} key={i}>
                                    <img src={comment.img} />
                                    <p>{comment.comment}</p>

                                    <div className={css.line}></div>

                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>)
                        })}
                    </Slider>

                </div>
            </motion.div>
        </motion.section>
    )
}

export default People