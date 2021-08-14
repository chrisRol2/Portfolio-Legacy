import React, { Component } from "react";
import "./styles/NavBar.css";
import "./styles/animate.min.css";
import scrollSpy, { navSpy } from "../helpers/scrollSpy";
import "./styles/hamburgers.css";
import Menu from "./Menu";

export class NavBar extends Component {
  state = {
    mediaQuery: false,
    scroll: null,
    menu: false,
  };

  body = document.querySelector("body");

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
  element = document.getElementById("nav__resposive");
  handleMenuClick = () => {
    let menuOpen = !this.state.menu;
    this.setState({ menu: menuOpen });
    this.body.style.overflow = `${menuOpen ? "hidden" : "visible"}`;
    console.log(this.element);
    this.element.scrollIntoView();
  };
  componentDidMount = () => {
    scrollSpy();
    this.element = document.getElementById("navbar");
  };
  componentWillUnmount = () => {
    // unObserver(this.state.scroll);
  };
  render() {
    return (
      <>
        {
          <Menu
            style={
              this.state.menu
                ? { transform: "scale(1)" }
                : { transform: "scale(0)" }
            }
          />
        }
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
              href="#Techno"
              name="Techno"
              className={"nav__link animate__animated " + this.state.Techno}
              onClick={this.onClick}
            >
              Tools
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
              <button
                onClick={this.handleMenuClick}
                className={`hamburger hamburger--spring ${
                  this.state.menu ? "is-active" : ""
                }`}
                type="button"
              >
                <span className="hamburger-box ">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </>
        </nav>
      </>
    );
  }
}

export default NavBar;
