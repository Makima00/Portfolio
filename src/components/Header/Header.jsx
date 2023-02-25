import React, { useRef, useState } from 'react';
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { headerVariants, getMenuStyles } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened
  })

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-primary ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`${css.name}`}>
          Mello
        </div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#experties">Services</a></li>
          <li><a href="#works">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+ 0123 456</p>
            <BiPhoneCall size="40px" />
          </li>
        </ul>

        {/* for medium and small screen */}
        <div
          onClick={() => setMenuOpened((prev) => !prev)}
          className={css.menuIcon}
        >
          <BiMenuAltRight size={30} />
        </div>

      </div>
    </motion.div >
  )
}

export default Header