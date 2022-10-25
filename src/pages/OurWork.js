import React from 'react';
import styled from 'styled-components';

//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { Link } from 'react-router-dom';

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='the-athlete'>
          <img src={athlete} alt='athlete' />
        </Link>
      </Movie>
      <Movie>
        <h2>The racer</h2>
        <div className='line'></div>
        <Link to='the-racer'>
          <img src={theracer} alt='theracer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='good-times'>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    color: black;
  }
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
