import React from "react";

//Styled
import styled from "styled-components";
import { About } from "../style";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I want?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia dolores iusto velit earum.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia dolores iusto velit earum.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diffrent payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia dolores iusto velit earum.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia dolores iusto velit earum.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
