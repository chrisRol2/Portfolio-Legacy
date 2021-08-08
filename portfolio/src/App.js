import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/ContactMe";
import "./App.css";
import { firstLoad } from "./helpers/scrollSpy";
import { MediaProvider } from "./context/MediaQueryContext";
// animate__backInUp
const App = () => {
    // const { mediaMatch } = useContext(MediaContext);
  const [mediaQuery, setMediaQuery] = useState(false);
  const mediaQueryEvent = matchMedia("(min-width: 450px)");
  useEffect(() => {
    firstLoad();
    setMediaQuery(mediaQueryEvent.matches);
    mediaQueryEvent.addEventListener("change", () => {
      setMediaQuery(mediaQueryEvent.matches);
    });
  }, []);

  return (
    <div>
      <MediaProvider>
        <Header />
        {mediaQuery && <NavBar />}
        
        <About />
        <Projects />
        <Contact />
        {/* <Header/> */}
      </MediaProvider>
    </div>
  );
};

export default App;
