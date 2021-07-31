import React, { Component } from 'react'
import './styles/Project.css'

const hovered = {
    display: 'none'
}
const unhovered = {
    display: 'flex'
}

export class Project extends Component {
    state = {
        hovered: false,
        hoverStyle: ''
    }

    onHover = () => {
        setTimeout(() => {
            this.setState({
                hovered: true
            });
        }, 50)
    }
    unHover = () => {
        setTimeout(() => {
            this.setState({
                hovered: false
            });
        }, 100)
    }
    render() {
        return (
            <div className="project_N"
                onMouseEnter={this.onHover}
                onMouseLeave={this.unHover}>
                {this.state.hovered &&
                    <div className="project_N-hover">
                    <div className="project_N-image">
                        <img src={this.props.img} alt={this.props.alt }/>
                    </div>
                    <div className="project_N-name">
                        <h2>{this.props.name}</h2>
                    </div>
                    <div className="project_N-link">
                        <button name="proyecto1">Go to {this.props.name }</button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Project
