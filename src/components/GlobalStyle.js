import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {
      background: #1b1b1b;
    }

    button{
      font-weight: 700;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      background: transparent;
      cursor: pointer;
      color: white;
      transition: all 0.5s ease;
      &:hover{
        background-color: #23d997;
        color: white;
      }
    }

    h2 {
      font-weight: lighter;
      color: white;
      font-size: 4rem;
    }

    h3 {
      color: white
    }

    h4 {
      font-weight: bold;
    }

    a{
      font-size: 1.1rem;
    }

    span{
      color: #23d997;
      font-weight: bold;
    }

    p {
      font-size: 1.4rem;
      color: #ccc;
      padding: 3rem 0rem;
      line-height: 150%;
    }
    `;

export default GlobalStyle;
