import React from "react";
import home1 from "../img/home1.png";
// Styled
import { About, Description, Image, Hide } from "../style";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
// Font Awesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
const AboutSection = () => {
  return (
    <About id="about-us">
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>My job is to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className="description-title" variants={titleAnim}>
              your{" "}
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>{" "}
              come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any website desgining or editing ideas that you have.
          We have professtionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
      </Image>

      <Wave />
    </About>
  );
};

// Styled Components

export default AboutSection;
