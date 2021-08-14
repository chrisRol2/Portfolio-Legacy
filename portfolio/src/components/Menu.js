import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./styles/Menu.css";
import esImg from "../images/spain.png";
import enImg from "../images/usa.png";
import ThemeContext from "../context/ThemeContext";
function Menu(props) {
  const { lang, setLang, text } = useContext(LanguageContext);
  const { theme, setTheme, themeStyles } = useContext(ThemeContext);
  const handleLanguage = () => setLang(lang === "en" ? "es" : "en");
  const handletheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <div id="menu" style={props.style}>
      <div id="menu__items">
        <div className="menu__item">
          <a href="/#header" onClick={props.onClick}>
            {text.home}
          </a>
        </div>
        <div className="menu__item">
          <a href="/#about" onClick={props.onClick}>
            {text.about}
          </a>
        </div>
        <div className="menu__item">
          <a href="/#Techno" onClick={props.onClick}>
            {text.tools}
          </a>
        </div>
        <div className="menu__item">
          <a href="/#projects" onClick={props.onClick}>
            {text.works}
          </a>
        </div>
        <div className="menu__item">
          <a href="/#contact" onClick={props.onClick}>
            {text.contact}
          </a>
        </div>
      </div>
      <div id="menu__config">
        <button
          onClick={handleLanguage}
          className="menu__config-btn"
          id="menu__config-lang"
        >
          <img src={lang === "en" ? enImg : esImg} alt="Language" />
        </button>
        <button
          onClick={handletheme}
          className="menu__config-btn"
          id="menu__config-theme"
        >
          Theme
        </button>
        <a
          href="https://github.com/chrisRol2"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="50px"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </a>
        <input type="button" value="🎆" />
      </div>
    </div>
  );
}

export default Menu;
