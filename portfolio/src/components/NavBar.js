import React, { Component } from "react";
import "./styles/NavBar.css";
import "./styles/animate.min.css";
import scrollSpy, {  } from "../helpers/scrollSpy";
export class NavBar extends Component {
  state = {
    mediaQuery: false,
    scroll: null,
  };
  onClick = (e) => {
    this.setState({
      [e.target.attributes.name.nodeValue]:
        "animate__animated animate__rubberBand active",
    });
    setTimeout(() => {
      this.setState({ [e.target.attributes.name.nodeValue]: "active" });
    }, 1000);
  };
  componentDidMount = () => {
    this.setState({ mediaQuery: matchMedia("(min-width: 425px)").matches });
    if (this.state.mediaQuery) this.setState({ scroll: scrollSpy() });
  };
  componentWillUnmount = () => {
    // unObserver(this.state.scroll);
  };
  render() {
    return (
      <nav id="navbar">
        <>
          <a
            href="#header"
            name="Home"
            className={this.state.Home}
            onClick={this.onClick}
          >
            Home
          </a>
          <a
            href="#about"
            name="About"
            className={this.state.About}
            onClick={this.onClick}
          >
            About
          </a>
          <a
            href="#projects"
            name="Projects"
            className={this.state.Projects}
            onClick={this.onClick}
          >
            Works
          </a>
          {/* <a href="/#" name="cv" className={this.state.cv} onClick={this.onClick}>
          CV
        </a> */}
          <a
            href="#contact"
            name="Contact"
            className={this.state.Contact}
            onClick={this.onClick}
          >
            Contact
          </a>
        </>
      </nav>
    );
  }
}

export default NavBar;
