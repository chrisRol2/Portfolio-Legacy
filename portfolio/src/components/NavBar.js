import React, { Component } from "react";
import "./styles/NavBar.css";
import "./styles/animate.min.css";
import scrollSpy from "../helpers/scrollSpy";
import "./styles/hamburgers.css";
export class NavBar extends Component {
  state = {
    mediaQuery: false,
    scroll: null,
  };
  onClick = (e) => {
    this.setState({
      [e.target.attributes.name.nodeValue]: "animate__rubberBand active ",
    });
    setTimeout(() => {
      this.setState({
        [e.target.attributes.name.nodeValue]: "active ",
      });
    }, 1000);
  };
  componentDidMount = () => {
    // this.setState({ mediaQuery: matchMedia("(min-width: 425px)").matches });
    // // if (this.state.mediaQuery) this.setState({ scroll: scrollSpy() });
    scrollSpy();
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
            className={"nav__link animate__animated " + this.state.Home}
            onClick={this.onClick}
          >
            Home
          </a>
          <a
            href="#about"
            name="About"
            className={"nav__link animate__animated " + this.state.About}
            onClick={this.onClick}
          >
            About
          </a>
          <a
            href="#projects"
            name="Projects"
            className={"nav__link animate__animated " + this.state.Projects}
            onClick={this.onClick}
          >
            Works
          </a>
          {/* <a href="/#" name="cv" className={["nav__link animate__animated " +this.state.cv]} onClick={this.onClick}>
          CV
        </a> */}
          <a
            href="#contact"
            name="Contact"
            className={"nav__link animate__animated " + this.state.Contact}
            onClick={this.onClick}
          >
            Contact
          </a>
          <div id="nav__resposive">
            <div></div>
            <a href="#header">Christopher</a>
            <button className="hamburger hamburger--spring" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </>
      </nav>
    );
  }
}

export default NavBar;
