import React from "react";
import "./styles/Menu.css";
function Menu(props) {
  return (
    <div id="menu" style={props.style}>
      <div id="menu__items">
        <div className="menu__item">Home</div>
        <div className="menu__item">About</div>
        <div className="menu__item">Tools</div>
        <div className="menu__item">Works</div>
        <div className="menu__item">Contact</div>
      </div>
      <div id="menu__config">config</div>
    </div>
  );
}

export default Menu;
