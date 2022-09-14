import { useState, createContext, useEffect } from "react";
import { es, en } from "../API/lang.json";

const LanguageContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  
  const data = {
    lang,
    setLang,
    text: lang === "en" ? en : es,
  };

  useEffect(() => {
    document.querySelector("html").lang = lang;
  },[lang])
    
    
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LangProvider };
export default LanguageContext;
