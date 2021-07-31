import React, { Component } from 'react'
import './styles/NavBar.css'
import './styles/animate.min.css';
export class NavBar extends Component {
    state = {
        
    }
    onClick = (e) => {
        this.setState({
            [e.target.attributes.name.nodeValue]: 'animate__animated animate__rubberBand' })
        setTimeout(() => { this.setState({ [e.target.attributes.name.nodeValue]: '' }) }, 1000)
    }
    render() {

        return (
            <div id="navbar">
                <h2 name="Home" className={this.state.Home}
                    onClick={this.onClick}
                >Home</h2>
                <h2 name="About" className={this.state.About}
                    onClick={this.onClick}>About</h2>
                <h2 name="Projects" className={this.state.Projects}
                    onClick={this.onClick}>Works</h2>
                <h2 name="cv" className={this.state.cv}
                    onClick={this.onClick}>CV</h2>
                <h2 name="Contact" className={this.state.Contact}
                    onClick={this.onClick}>Contact</h2>
            </div>
        )
    }
}

export default NavBar
