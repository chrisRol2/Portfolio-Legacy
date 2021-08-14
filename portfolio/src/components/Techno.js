import React, { useContext } from "react";
import "./styles/Techno.css";
import { tecno, tools } from "../API/works.json";
import LanguageContext from "../context/LanguageContext";

function Techno() {
  const { text } = useContext(LanguageContext);

  return (
    <div id="Techno" scrollspy="true">
      <div className="title__component" id="techno__Title">
        <h2>
          {text.my} {text.tools}
        </h2>
      </div>
      <div id="Techno__div">
        {tecno.map((e) => {
          return <h2 key={e.id}>{e.name}</h2>;
        })}
        {tools.map((e) => {
          return <h2 key={e.id}>{e.name}</h2>;
        })}
      </div>
    </div>
  );
}

export default Techno;
