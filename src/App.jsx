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
        className={`min-h-screen overflow-x-hidden transition-all duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-[#362618] via-[#3E2723] to-[#5D4037] text-[#FAF9F6]"
            : "bg-[#FAF9F6] text-[#895129]"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="pt-20 space-y-16">

          <section id="home">
            <Hero darkMode={darkMode} />
          </section>

          <section id="about">
            <About darkMode={darkMode} />
          </section>

          <section id="skills">
            <Skills darkMode={darkMode} />
          </section>

          <section id="projects">
            <Projects darkMode={darkMode} />
          </section>

          <section id="contact">
            <Contact darkMode={darkMode} />
          </section>

        </main>

        <Footer darkMode={darkMode} />

        {/* WhatsApp */}
        <a
          href="https://wa.me/9203260569202"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;