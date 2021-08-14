import React, { useState, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./styles/Project.css";
const unhovered = {
  display: "flex",
  opacity: "0",
};
const hoveredS = {
  display: "flex",
  background: "#807f9160",
};

export const Project = (props) => {
  const { text } = useContext(LanguageContext);
  const [hoverStyle, setHoverStyle] = useState(unhovered);
  const [animate, setAnimate] = useState("");

  const onHover = () => setTimeout(() => setHoverStyle(hoveredS), 50);

  const unHover = () => setTimeout(() => setHoverStyle(unhovered), 100);

  const onClick = () => {
    setAnimate("animate__animated animate__heartBeat");
    setTimeout(() => {
      setAnimate("");
    }, 500);
  };

  // console.log(img);
  return (
    <div
      className="project_N"
      onMouseEnter={onHover}
      onMouseLeave={unHover}
      style={{
        background: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="project_N-hover" style={hoverStyle}>
        <div className="project_N-name">
          <h2>{props.name}</h2>
        </div>

        <div className="project_N-link">
          <button className={animate} onClick={onClick} name="proyecto1">
            {text.visit} {props.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
