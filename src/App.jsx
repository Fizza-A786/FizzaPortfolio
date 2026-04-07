import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./Component/common/Navbar";
import Footer from "./Component/common/Footer";

import "./App.css";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-all duration-500
        dark:bg-gray-900 dark:text-white bg-white text-black`}
      >
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9203260569202"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;