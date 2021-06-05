import React from "react";
// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import { About, Description, Image, ServiceDescription } from "../style";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, control] = useScroll();
  return (
    <Services
      id="our-services"
      variants={scrollReveal}
      animate={control}
      ref={element}
    >
      <Image className="main-image">
        <img src={home2} alt="home2" />
      </Image>
      <ServiceDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </ServiceDescription>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  /* width: 95%; */
  padding-right: 5rem;
  @media (max-width: 1200px) {
    padding: 0rem;
    margin-top: 1rem;
    flex-direction: column-reverse;
    h2 {
      margin: auto;
    }
  }
  img {
    @media (max-width: 760px) {
      justify-content: center;
      padding: 0rem;
    }
  }

  @media (max-width: 760px) {
    .main-image {
      justify-content: center;
      padding-left: 0rem;
      padding: 3rem 5.7rem;
      max-width: 100%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 760px) {
    padding-left: 0rem;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
      background: white;
      color: black;
    }
  }
  @media (max-width: 760px) {
    P {
      margin: auto;
    }
  }
`;
export default ServicesSection;
