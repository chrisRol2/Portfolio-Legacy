import React, { Component } from 'react'
import './styles/Project.css'

const unhovered = {
    display: "flex",
    opacity: "0"
}
const hovered = {
    display: "flex",
    // opacity: "0.50",
    background: "#807f9160"
}


export class Project extends Component {
    state = {
        hovered: false,
        hoverStyle: unhovered,
        
    }

    onHover = () => {
        setTimeout(() => {
            this.setState({
                hovered: true,
                hoverStyle: hovered
            });
        }, 50)
    }
    unHover = () => {
        setTimeout(() => {
            this.setState({
                hovered: false,
                hoverStyle: unhovered
            });
        }, 100)
    }


    onClick = (e) => {
        this.setState({
            animate: 'animate__animated animate__heartBeat'
        })
        setTimeout(() => { this.setState({ animate: '' }) }, 500)
    }

    render() {
        return (
            <div className="project_N"
                
                onMouseEnter={this.onHover}
                onMouseLeave={this.unHover}>
                <div className="project_N-hover" style={this.state.hoverStyle}>
                    
                    <div className="project_N-image" >
                        <img src={this.props.img} alt={this.props.alt }/>
                    </div>
                    
                    <div className="project_N-name" >
                        <h2>{this.props.name}</h2>
                    </div>
                    
                    <div className="project_N-link" >
                        <button className={this.state.animate}
                            onClick={this.onClick}
                            name="proyecto1">
                            Visit {this.props.name}</button>
                    </div>
                
               </div>
            </div>
        )
    }
}

export default Project
