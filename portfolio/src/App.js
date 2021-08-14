import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/ContactMe";
import "./App.css";
import { MediaProvider } from "./context/MediaQueryContext";
import { ErrorProvider } from "./context/ErrorContext";
import Techno from "./components/Techno";
import { LangProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

// animate__backInUp
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <LangProvider>
          <MediaProvider>
            <ErrorProvider>
              <Header />
              <About />
              <Techno />
              <Projects />
              <Contact />
            </ErrorProvider>
          </MediaProvider>
        </LangProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
