import React from "react";

//Import background
import home1 from "../img/home1.png";

//Import styled component
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills to help active it
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="A guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
