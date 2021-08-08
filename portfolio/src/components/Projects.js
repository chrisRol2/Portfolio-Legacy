import React, { Component } from "react";
import Project from "./Project";
import "./styles/Projects.css";
import Works from "../API/works.json";
export class Projects extends Component {
  render() {
    return (
      <div id="projects" scrollspy="true">
        <div className="title__component" id="project__title">
          <h2>My Works</h2>
        </div>
        <div id="project__div">
          {Works.map((work) => {
            return <Project name={work.name} key={work.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
