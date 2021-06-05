import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5rem 8rem;
  color: white;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 3rem 10rem;
    /* text-align: center; */
    img {
      margin-top: 3rem;
      padding: 0;
      max-width: 100% !important;
    }
  }
  @media (max-width: 600px) {
    padding: 3rem 2rem;
    p {
      text-align: left;
    }
    h2 {
      width: 100%;
      font-size: 3rem;
      display: flex;
      span {
        /* margin: 0 0.85rem; */
      }
      /* justify-content: space-between; */
    }
    @media (max-width: 500px) {
      text-align: left;
    }

    @media (max-width: 760px) {
      img {
        justify-content: center;
        padding-left: 0rem;
        padding: 3rem 4rem;
        max-width: 100% !important;
      }
    }
  }
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 760px) {
    padding: 0;
    button {
      padding: 1rem 2rem;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 500px) {
    .description-title {
      display: inline;
    }
  }
`;
export const ServiceDescription = styled(Description)`
  padding-left: 3rem;
  padding-right: 0rem;
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 750px) {
    padding-left: 0;
    img {
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    max-width: 25vw;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
