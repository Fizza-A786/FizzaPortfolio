import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ add this
import Navbar from "./Component/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import "./App.css";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`relative z-10 transition-colors duration-500 
        ${
          darkMode
            ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
            : "bg-white"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills darkMode={darkMode} setDarkMode={setDarkMode} />
        <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
        <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* ✅ WhatsApp Button */}
        <a
          href="https://wa.me/9203260569202"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;