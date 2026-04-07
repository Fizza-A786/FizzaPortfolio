import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b transition-all duration-500
      ${
        darkMode
          ? "bg-[#020617]/80 border-white/10 text-[#E2E8F0]"
          : "bg-[#FAF9F6]/90 border-[#895129]/20 text-[#895129]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img
            src={darkMode ? logo2 : logo1}
            alt="logo"
            className="h-16 transition-all duration-500"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-md">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="relative group cursor-pointer transition-all duration-300 hover:text-blue-400"
            >
              {item.name}

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 flex items-center rounded-full border p-1 transition-all duration-500
            ${
              darkMode
                ? "bg-[#1E293B] border-white/20"
                : "bg-[#895129]/20 border-[#895129]/40"
            }`}
          >
            <Sun
              size={16}
              className={`absolute left-2 transition-all duration-500 ${
                darkMode
                  ? "opacity-0 scale-50"
                  : "opacity-100 text-[#895129]"
              }`}
            />
            <Moon
              size={16}
              className={`absolute right-2 transition-all duration-500 ${
                darkMode
                  ? "opacity-100 text-blue-300"
                  : "opacity-0 scale-50"
              }`}
            />
            <div
              className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
              ${
                darkMode
                  ? "translate-x-8 bg-blue-400"
                  : "translate-x-0 bg-[#895129]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden backdrop-blur-xl border-t px-6 py-6 space-y-4 text-center transition-all duration-500
          ${
            darkMode
              ? "bg-[#020617]/95 border-white/10 text-[#E2E8F0]"
              : "bg-[#FAF9F6]/95 border-[#895129]/20 text-[#895129]"
          }`}
        >
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item.name}
            </div>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 flex items-center rounded-full border p-1"
            >
              <div
                className={`w-6 h-6 rounded-full transition-all ${
                  darkMode ? "translate-x-8 bg-blue-400" : "bg-[#895129]"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;