import React from "react";
// Animatons
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <h1>Contact US</h1>
    </motion.div>
  );
};
export default ContactUS;
