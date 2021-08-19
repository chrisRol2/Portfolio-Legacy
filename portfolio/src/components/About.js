import React, { useContext } from "react";
import "./styles/About.css";
import profile from "../images/myProfile.png";
import LanguageContext from "../context/LanguageContext";

const About = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div id="about" scrollspy="true">
      <div className="title__component  headline" id="about__Title">
        <h2>{text.about}</h2>
      </div>
      <div id="aboutMe" className="headline">
        <div id="aboutMe__image-container">
          <img src={profile} id="image" alt="Profile"></img>
        </div>

        <div id="aboutMe__about-container">
          <h2>FrontEnd Developer</h2>
          <p>{text.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
