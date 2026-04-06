import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Component/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import "./App.css";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark overflow-x-hidden" : "overflow-x-hidden"}>
      <div
        className={`relative z-10 overflow-x-hidden transition-colors duration-500 
        ${
          darkMode
            ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
            : "bg-white"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9203260569202"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-2 rounded-full shadow-2xl shadow-green-500 hover:scale-110 transition-transform z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;