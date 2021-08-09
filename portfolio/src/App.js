import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/ContactMe";
import "./App.css";
import { MediaProvider } from "./context/MediaQueryContext";
import { ErrorProvider } from "./context/ErrorContext";
// animate__backInUp
const App = () => {
  return (
    <div>
      <MediaProvider>
        <Header />
        <About />
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
