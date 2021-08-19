import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import Project from "./Project";
import "./styles/Projects.css";
import { Works } from "../API/works.json";
import img from "./styles/rolgusCom.png";
import fondo from "../images/fondo.png";
import profile from "../images/myProfile.png";
import images from "../images/images.png";

const imgs = [img, fondo, profile, images];

export const Projects = () => {
  const { text } = useContext(LanguageContext);

  // console.log(img);
  return (
    <div id="projects" scrollspy="true">
      <div className="title__component headline" id="project__title">
        <h2>
          {text.my} {text.works}
        </h2>
      </div>
      <div id="project__div" className="headline">
        {Works.map((work, idex) => {
          return (
            <Project
              name={work.name}
              key={work.id}
              img={imgs[idex]}
              link={work.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
