import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import "./App.css";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`relative z-10 transition-colors duration-500 
        ${darkMode 
          ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]" 
          : "bg-white"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills darkMode={darkMode} setDarkMode={setDarkMode}/>
        < Projects/>
      </div>
    </div>
  );
};

export default App;