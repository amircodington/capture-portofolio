import React from 'react';

//Styled
import styled from 'styled-components';
import { About } from '../style';

//Components
import Toggle from './Toggle';

//Animation
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How do I want?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              mollitia dolores iusto velit earum.
            </p>
          </div>
        </Toggle>
        <Toggle title='What products do you offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              mollitia dolores iusto velit earum.
            </p>
          </div>
        </Toggle>
        <Toggle title='Diffrent payment methods?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              mollitia dolores iusto velit earum.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              mollitia dolores iusto velit earum.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h4 {
    padding-bottom: 2rem;
  }

  .faq-line {
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    background: #ccc;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 0.5rem 0rem;
    }
  }
`;

export default FaqSection;
