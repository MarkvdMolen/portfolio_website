import React from 'react';
import { motion } from 'framer-motion';
import { Images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export const Header = () => {
  return (
    <div></div>
    // <div className="app__header app__flex">
    // <motion.div
    //   whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //   transition={{ duration: 0.5 }}
    //   className="app__header-info"
    // >
    //   <div className="app__header-badge">
    //     <div className="badge-cmp app__flex">
    //       <span>👋</span>
    //       <div style={{ marginLeft: 20 }}>
    //         <p className="p-text">Hello, I am</p>
    //         <h1 className="head-text">Mark van der Molen</h1>
    //       </div>
    //     </div>

    //     <div className="tag-cmp app__flex">
    //       <p className="p-text">Student Software Engineering</p>
    //       <p className="p-text">With a passion for</p>
    //       <p className="p-text">Statistics & Webdevelopment</p>
    //     </div>
    //   </div>
    // </motion.div>

    // <motion.div
    //   whileInView={{ opacity: [0, 1] }}
    //   transition={{ duration: 0.5, delayChildren: 0.5 }}
    //   className="app__header-img"
    // >
    // <img src={Images.profile} alt="profile_bg" />
    // <motion.img
    //   whileInView={{ scale: [0, 1] }}
    //   transition={{ duration: 1, ease: 'easeInOut' }}
    //   src={Images.circle}
    //   alt="profile_circle"
    //   className="overlay_circle"
    // />
    // </motion.div>

    // <motion.div
    //   variants={scaleVariants}
    //   whileInView={scaleVariants.whileInView}
    //   className="app__header-circles"
    // >
    //   {[Images.flutter, Images.redux, Images.sass].map((circle, index) => (
    //     <div className="circle-cmp app__flex" key={`circle-${index}`}>
    //       <img src={circle} alt="profile_bg" />
    //     </div>
    //   ))}
    // </motion.div>
    // </div>
  );
}

export default Header;