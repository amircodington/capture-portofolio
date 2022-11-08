import React from 'react';
import styled from 'styled-components';

//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { Link } from 'react-router-dom';

// animation
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

import {
  pageAnimation,
  fade,
  photoAnime,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ backgroundColor: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>

        <motion.div variants={lineAnim} className='line'></motion.div>

        <Link to='the-athlete'>
          <Hide>
            <motion.img variants={photoAnime} src={athlete} alt='athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <h2>The racer</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='the-racer'>
          <img src={theracer} alt='theracer' />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='good-times'>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  h2 {
    color: black;
  }
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 8%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
