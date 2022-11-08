import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
