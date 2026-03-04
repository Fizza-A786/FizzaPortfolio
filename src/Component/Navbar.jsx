import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b transition-all duration-500
      ${darkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-cyan-900/20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-16 cursor-pointer" />

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-8 text-sm transition-colors duration-500
          ${darkMode ? "text-gray-200" : "text-gray-700"}
          `}
        >
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li
              key={item.name}
              className={`relative group cursor-pointer transition-all duration-300
              ${darkMode ? "hover:text-white" : "hover:text-cyan-800"}
              `}
            >
              <a href={item.href}>{item.name}</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#00c6ff] to-[#179ca8] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 flex items-center rounded-full backdrop-blur-lg border p-1 transition-all duration-500
            ${darkMode ? "bg-white/10 border-white/20" : "bg-cyan-50 border-cyan-800"}
            `}
          >
            <Sun
              size={16}
              className={`absolute left-2 transition-all duration-500 ${
                darkMode ? "opacity-0 scale-50" : "opacity-100 scale-100 text-yellow-500"
              }`}
            />
            <Moon
              size={16}
              className={`absolute right-2 transition-all duration-500 ${
                darkMode ? "opacity-100 scale-100 text-cyan-800" : "opacity-0 scale-50"
              }`}
            />
            <div
              className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
              ${darkMode ? "translate-x-8 bg-gradient-to-r from-cyan-600 to-cyan-700" : "translate-x-0 bg-cyan-800"}`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-500 text-2xl font-bold"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden backdrop-blur-xl border-t px-6 py-6 space-y-4 text-center transition-all duration-500
          ${darkMode ? "bg-white/5 border-white/10 text-gray-300" : "bg-white/80 border-cyan-900/20 text-gray-700"}
          `}
        >
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block transition duration-300 cursor-pointer ${
                darkMode ? "hover:text-white" : "hover:text-cyan-800"
              }`}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-16 h-8 flex items-center rounded-full border p-1 transition-all duration-500
              ${darkMode ? "bg-white/10 border-white/20" : "bg-cyan-50 border-cyan-800"}
              `}
            >
              <Sun
                size={16}
                className={`absolute left-2 transition-all duration-500 ${
                  darkMode ? "opacity-0 scale-50" : "opacity-100 scale-100 text-yellow-500"
                }`}
              />
              <Moon
                size={16}
                className={`absolute right-2 transition-all duration-500 ${
                  darkMode ? "opacity-100 scale-100 text-cyan-800" : "opacity-0 scale-50"
                }`}
              />
              <div
                className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
                ${darkMode ? "translate-x-8 bg-gradient-to-r from-cyan-600 to-cyan-700" : "translate-x-0 bg-cyan-800"}`}
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;