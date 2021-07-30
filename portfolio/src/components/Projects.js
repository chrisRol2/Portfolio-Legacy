import React, { Component } from 'react'
import './styles/Projects.css'
export class Projects extends Component {
    render() {
        return (
            <div>
                <div className="title__component">
                    <h2>My Projects</h2>
                </div>
                <div id="project__div"  >
                    <div className="project_N"></div>
                    <div className="project_N"></div>
                    <div className="project_N"></div>
                    <div className="project_N"></div>
                </div>
            </div>
        )
    }
}

export default Projects
