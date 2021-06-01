import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  const [navStatue, setNavStatue] = useState(false);
  return (
    <StyledNav className={`navbar ${navStatue ? "collapse" : ""}`}>
      <div className="brand-name">
        <h1>
          <Link id="logo" to="/">
            Capture
          </Link>
        </h1>
      </div>
      <ToggleButton
        onClick={() => setNavStatue(!navStatue)}
        href="#"
        className="toggle-button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </ToggleButton>

      <div className={`navbar-links ${navStatue ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">1. About Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "50%" : "0%" }}
              className="line-animation"
            />
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "50%" : "0%" }}
              className="line-animation"
            />
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
              className="line-animation"
            />
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: relative;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: height 1s ease-out !important;
  a {
    display: block;
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #logo {
    font-size: 1.6rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .navbar-links {
    height: 100%;
  }
  .navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1205px) {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 4em;
    .toggle-button {
      display: flex;
    }
    .brand-name {
      margin-right: 0;
    }
    .navbar-links {
      display: none;
      width: 100%;
    }

    .navbar-links ul {
      width: 100%;
      flex-direction: column;
    }

    .navbar-links ul li {
      text-align: center;
      padding-left: 0rem;
    }
    /* .navbar-links li:hover {
      background-color: #555;
    } */

    .navbar-links ul li a {
      padding: 0.5rem 1rem;
    }

    .navbar-links.active {
      display: flex;
    }
    .line-animation {
      display: none;
      /* width: 20% !important; */
    }
    .brand-name {
      margin-bottom: 1.1rem;
    }
  }
  /* @media (max-width: 1200px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  } */
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1200px) {
    left: 0%;
  }
`;
const ToggleButton = styled.a`
  position: absolute;
  top: 1.5rem;
  right: 4rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }
`;
export default Nav;
