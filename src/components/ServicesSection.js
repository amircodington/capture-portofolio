import React from 'react';
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//Import background
import home2 from '../img/home2.png';

//Import styled
import styled from 'styled-components';
import { About, Description, Image } from '../style';

//Animation
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Service
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
    >
      <Description>
        <h2>
          High <span>quality</span> service.
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='camera' />
      </Image>
    </Service>
  );
};

const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 1300px) {
    h3 {
      font-size: 80%;
      margin-right: 5rem;
    }
  }
`;

export default ServicesSection;
