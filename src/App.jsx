import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/common/Navbar";
import Footer from "./Component/common/Footer";
import Home from "./Pages/Home";

import "./App.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skills from "./Component/home/Skills";
import Projects from "./Component/home/Projects";
import Contact from "./Component/home/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      {/* 🌙 DARK MODE ROOT CLASS */}
      <div className={darkMode ? "dark" : ""}>
        <div
          className={`min-h-screen transition-all duration-500
          dark:bg-gray-900 dark:text-white bg-white text-black`}
        >
          {/* Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Pages */}
          <main>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/skills" element={<Skills darkMode={darkMode} />} />
              <Route path="/services" element={<Services darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
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
    </Router>
  );
};

export default App;