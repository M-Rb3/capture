import React from "react";
// Animatons
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const ContactUS = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Container>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} />
              <div className="topic">Address</div>
              <div className="text-one">Lorem, ipsum.</div>
              <div className="text-two">Lorem, ipsum dolor.</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
              <div className="topic">Phone</div>
              <div className="text-one">+0000 0000 0000</div>
              <div className="text-two">+0000 0000 0000</div>
            </div>
            <div className="email details">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <div className="topic">Email</div>
              <div className="text-one">11111@gmail.com</div>
              <div className="text-two">11111@gmail.com</div>
            </div>
          </div>

          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <form onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-box message-box">
                <input
                  type="text-area"
                  name="massage"
                  placeholder="Enter Your massage"
                />
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </ContactStyled>
  );
};
const ContactStyled = styled(motion.div)`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  width: 100%;
  background: #c8e8e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 85%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  p {
    padding: 0;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content .left-side {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
  }
  .content .left-side::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: #afafb6;
  }
  .content .left-side .details {
    margin: 14px;
    text-align: center;
  }
  .content .left-side .details .icon {
    font-size: 30px;
    color: #282828;
    margin-bottom: 10px;
  }
  .content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
  }
  .content .left-side .details .text-one,
  .content .left-side .details .text-two {
    font-size: 14px;
    color: #afafb6;
  }
  .content .right-side {
    width: 75%;
    margin-left: 75px;
  }
  .content .right-side .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: #282828;
  }
  .right-side .input-box {
    height: 50px;
    width: 100%;
    margin: 12px 0;
  }
  .right-side .input-box input,
  .right-side .input-box textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #f0f1f8;
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
  }
  .right-side .message-box {
    min-height: 110px;
  }
  .right-side .input-box textarea {
    padding-top: 6px;
  }
  .right-side .button {
    display: inline-block;
    margin-top: 12px;
  }
  .right-side .button input[type="submit"] {
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: #282828;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button input[type="button"]:hover {
    background: #bbbbbb;
  }

  @media (max-width: 950px) {
    width: 90%;
    padding: 30px 40px 40px 35px;

    .content .right-side {
      width: 75%;
      margin-left: 55px;
    }
  }
  @media (max-width: 820px) {
    margin: 40px 0;
    height: 100%;

    .content {
      flex-direction: column-reverse;
    }
    .content .left-side {
      width: 100%;
      flex-direction: row;
      margin-top: 40px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .content .left-side::before {
      display: none;
    }
    .content .right-side {
      width: 100%;
      margin-left: 0;
    }
  }
`;

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9m1psmk",
      "template_2gc3fk6",
      e.target,
      "user_GZW9IIq4bQnBZXdhJvD5R"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
export default ContactUS;
