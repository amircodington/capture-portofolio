import React from 'react';

//Import background
import home1 from '../img/home1.png';
import Wave from './Wave';

//Import styled component
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../style';

// animation
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnime } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills to help active it
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnime}
          initial='hidden'
          animate='show'
          src={home1}
          alt='A guy with a camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
