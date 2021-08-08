import React from "react";
import "./styles/About.css";
import profile from "../images/images.png";
import MeAbout from "../API/AboutMe.json";

const About = () => {
  return (
    <div id="about" scrollspy="true">
      <div className="title__component" id="about__Title">
        <h2>About Me</h2>
      </div>
      <div id="aboutMe">
        <div id="aboutMe__image-container">
          <img src={profile} id="image" alt="Profile"></img>
        </div>

        <div id="aboutMe__about-container">
          <h2>FrontEnd Developer</h2>
          <br />
          <h2>Christopher Roldan Sanchez</h2>
          <p>{MeAbout.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
