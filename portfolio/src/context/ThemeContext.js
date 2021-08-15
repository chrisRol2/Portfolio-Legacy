import { useState, createContext } from "react";

const ThemeContext = createContext();

const dark = {};
const light = {
  boderColor: "#121111",
  hoverProjects: "#807f9160",
  backgroundTablet: "#fbf8ee",
  buttonHover: "#ccc9c1",
  buttonActive: "#ffbb00",
  textArea: "#fbf8ee57",
  title: "#eee",
  bodyBackground: "#d0d3ec",
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const data = {
    theme,
    setTheme,
    themeStyles: theme === "dark" ? dark : light,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
