import React, { useState, useEffect, useContext } from "react";
import MediaContext from "../context/MediaQueryContext";
import NavBar from "./NavBar";
import "./styles/Header.css";

const initialHover = {
  color: "#d0d3ec",
  letterSpacing: "5px",
  transition:
    "left 0.8s ease-out , color 0.8s ease-out, letter-spacing 2s ease-out",
};
const endHover = {
  transition: "left 0.5s, color 0.5s, letter-spacing 1s",
  color: "#ecd0d0",
  letterSpacing: "15px",
};
const nameLong = {
  large: "Christopher",
  small: "Chris",
};
const Header = () => {
  const { mediaMatch } = useContext(MediaContext);

  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState(nameLong.small);
  const [titleName, setTitleName] = useState(null);
  const [animationClass, setAnimationClass] = useState(initialHover);
  // animate__animated animate__fadeInDown

  useEffect(() => {
    setName(mediaMatch ? nameLong.large : nameLong.small);
  }, [mediaMatch]);

  useEffect(() => {
    setTitleName(name);
  }, [name]);

  const handleHover = () => {
    if (matchMedia("(min-width: 1008px)").matches) {
      /* La pantalla tiene al menos 1024 píxeles de ancho */
      if (isHovered) {
        setAnimationClass(initialHover);
        setTitleName(name);
      } else {
        setAnimationClass(endHover);
        setTitleName("FrontEnd Developer");
      }
      setIsHovered(!isHovered);
    } else {
      /* La pantalla tiene menos de 400 píxeles de ancho */
    }
  };

  return (
    <>
      <div id="header" scrollspy="false">
        <div className="animate__animated animate__zoomInDown">
          <h2>Hello, i am</h2>
          <div>
            <h1
              style={animationClass}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {titleName}
            </h1>
          </div>
          {/* <h2>FrontEnd Developer</h2> */}
        </div>
      </div>
      {<NavBar />}
    </>
  );
};

export default Header;
