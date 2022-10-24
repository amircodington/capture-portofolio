import React from 'react';
import styled from 'styled-components';

//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <img src={athlete} alt='athlete' />
      </Movie>
      <Movie>
        <h2>The racer</h2>
        <div className='line'></div>
        <img src={theracer} alt='theracer' />
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <img src={goodtimes} alt='goodtimes' />
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
