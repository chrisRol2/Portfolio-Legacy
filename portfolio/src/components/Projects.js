import React, { Component } from 'react'
import Project from './Project'
import './styles/Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <div className="title__component">
                    <h2>My Works</h2>
                </div>
                <div id="project__div">
                    
                    <Project name="Rolgus ToolBox"/>
                    <Project name="Discord Bot"/>
                    <Project name= "Chris Rol"/>
                    <Project name="lot-tido"/>
                    
                </div>
            </div>
        )
    }
}

export default Projects
