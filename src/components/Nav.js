import React from 'react';

//Styled
import styled from 'styled-components';

//import router link
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='Logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About us</Link>
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  background-color: #282828;
  width: auto;
  padding: 1rem 10rem;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }
  #Logo {
    font-size: 1.3rem;
    font-family: 'Lobster', cursive;
  }
`;

export default Nav;
