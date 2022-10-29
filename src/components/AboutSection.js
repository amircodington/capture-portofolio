import React from 'react';

//Import background
import home1 from '../img/home1.png';

//Import styled component
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../style';

// animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills to help active it
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt='A guy with a camera' />
      </Image>
    </About>
  );
};

export default AboutSection;
