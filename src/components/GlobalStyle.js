import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {
      background: #1b1b1b;
      font-family: "Inter", sans-serif;
    }

    button{
      font-weight: bold;
      font-size: 0.8rem;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      background: transparent;
      cursor: pointer;
      color: white;
      transition: all 0.5s ease;
      &:hover{
        background-color: #23d997;
        color: black;
      }
    }

    h2 {
      font-weight: lighter;
      color: white;
      font-size: 2.8rem;
    }

    h3 {
      color: white
    }

    h4 {
      font-weight: bold;
      font-size: 1.5rem;
    }

    a{
      font-size: 0.9rem;
    }

    span{
      color: #23d997;
      font-weight: bold;
    }

    p {
      font-size: 1rem;
      color: #ccc;
      padding: 3rem 0rem;
      line-height: 150%;
    }
    `;

export default GlobalStyle;
