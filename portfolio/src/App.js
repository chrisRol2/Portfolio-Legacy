import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/ContactMe";
import "./App.css";
import { MediaProvider } from "./context/MediaQueryContext";
import { ErrorProvider } from "./context/ErrorContext";
import Techno from "./components/Techno";
// animate__backInUp
const App = () => {
  return (
    <div>
      <MediaProvider>
        <Header />
        <About />
        <Techno />
        <Projects />
        <ErrorProvider>
          <Contact />
        </ErrorProvider>
        {/* <Header/> */}
      </MediaProvider>
    </div>
  );
};

export default App;
