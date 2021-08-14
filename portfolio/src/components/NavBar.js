import React, { useState, useContext, useEffect } from "react";
import "./styles/NavBar.css";
import "./styles/animate.min.css";
import scrollSpy from "../helpers/scrollSpy";
import "./styles/hamburgers.css";
import Menu from "./Menu";
import LanguageContext from "../context/LanguageContext";

export const NavBar = () => {
    const { text } = useContext(LanguageContext);
  const [menu, setMenu] = useState(false);
  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);
  const [techno, setTechno] = useState(null);
  const [projects, setProjects] = useState(null);
  const [contact, setContact] = useState(null);

  const body = document.querySelector("body");

  const onClick = (e) => {
    switch (e.target.attributes.name.nodeValue) {
      case "Home":
        setHome("animate__rubberBand active ");
        setTimeout(() => setHome("active "), 1000);
        break;
      case "About":
        setAbout("animate__rubberBand active ");
        setTimeout(() => setAbout("active "), 1000);
        break;
      case "Techno":
        setTechno("animate__rubberBand active ");
        setTimeout(() => setTechno("active "), 1000);
        break;
      case "Projects":
        setProjects("animate__rubberBand active ");
        setTimeout(() => setProjects("active "), 1000);
        break;
      case "Contact":
        setContact("animate__rubberBand active ");
        setTimeout(() => setContact("active "), 1000);
        break;

      default:
        break;
    }
  };

  const handleMenuClick = () => {
    let menuOpen = !menu;
    setMenu(menuOpen);
    body.style.overflow = `${menuOpen ? "hidden" : "visible"}`;
    const element = document.getElementById("navbar");
    element.scrollIntoView();
  };

  useEffect(() => {
    scrollSpy();
  }, []);

  return (
    <>
      {
        <Menu
          onClick={handleMenuClick}
          style={menu ? { transform: "scale(1)" } : { transform: "scale(0)" }}
        />
      }
      <nav id="navbar">
        <>
          <a
            href="#header"
            name="Home"
            className={"nav__link animate__animated " + home}
            onClick={onClick}
          >
            {text.home}
          </a>
          <a
            href="#about"
            name="About"
            className={"nav__link animate__animated " + about}
            onClick={onClick}
          >
            {text.about}
          </a>
          <a
            href="#Techno"
            name="Techno"
            className={"nav__link animate__animated " + techno}
            onClick={onClick}
          >
            {text.tools}
          </a>
          <a
            href="#projects"
            name="Projects"
            className={"nav__link animate__animated " + projects}
            onClick={onClick}
          >
            {text.works}
          </a>
          {/* <a href="/#" name="cv" className={["nav__link animate__animated " +this.state.cv]} onClick={this.onClick}>
              CV
            </a> */}
          <a
            href="#contact"
            name="Contact"
            className={"nav__link animate__animated " + contact}
            onClick={onClick}
          >
            {text.contact}
          </a>
          <div id="nav__resposive">
            <div></div>
            <a href="#header">Christopher</a>
            <button
              onClick={handleMenuClick}
              className={`hamburger hamburger--spring ${
                menu ? "is-active" : ""
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
};

export default NavBar;
