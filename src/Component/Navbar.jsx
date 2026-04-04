import React, { useState } from "react";
import logo1 from "../assets/logo1.png"; // light theme logo
import logo2 from "../assets/logo2.png"; // dark theme logo
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b transition-all duration-500
      ${darkMode ? "bg-[#895129]/90 border-[#FAF9F6]/20" : "bg-[#FAF9F6]/90 border-[#895129]/20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <img
          src={darkMode ? logo2 : logo1}
          alt="logo"
          className="h-16 cursor-pointer transition-all duration-500"
        />

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-8 text-md transition-colors duration-500
          ${darkMode ? "text-[#FAF9F6]" : "text-[#895129]"}
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
              ${darkMode ? "hover:text-white" : "hover:text-[#895129]"}
              `}
            >
              <a href={item.href}>{item.name}</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#FAF9F6] to-[#895129] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 flex items-center rounded-full border p-1 transition-all duration-500
            ${darkMode ? "bg-[#FAF9F6]/20 border-[#FAF9F6]/40" : "bg-[#895129]/20 border-[#895129]/40"}
            `}
          >
            {/* Sun */}
            <Sun
              size={16}
              className={`absolute left-2 transition-all duration-500 ${
                darkMode
                  ? "opacity-0 scale-50"
                  : "opacity-100 scale-100 text-[#895129]"
              }`}
            />

            {/* Moon */}
            <Moon
              size={16}
              className={`absolute right-2 transition-all duration-500 ${
                darkMode
                  ? "opacity-100 scale-100 text-[#FAF9F6]"
                  : "opacity-0 scale-50"
              }`}
            />

            {/* Toggle Circle */}
            <div
              className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
              ${darkMode ? "translate-x-8 bg-[#FAF9F6]" : "translate-x-0 bg-[#895129]"}`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${darkMode ? "text-[#FAF9F6]" : "text-[#895129]"} text-2xl font-bold`}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden backdrop-blur-xl border-t px-6 py-6 space-y-4 text-center transition-all duration-500
          ${darkMode ? "bg-[#895129]/90 border-[#FAF9F6]/20 text-[#FAF9F6]" : "bg-[#FAF9F6]/90 border-[#895129]/20 text-[#895129]"}
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
                darkMode ? "hover:text-white" : "hover:text-[#895129]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-16 h-8 flex items-center rounded-full border p-1 transition-all duration-500
              ${darkMode ? "bg-[#FAF9F6]/20 border-[#FAF9F6]/40" : "bg-[#895129]/20 border-[#895129]/40"}
              `}
            >
              <Sun
                size={16}
                className={`absolute left-2 transition-all duration-500 ${
                  darkMode
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100 text-[#895129]"
                }`}
              />
              <Moon
                size={16}
                className={`absolute right-2 transition-all duration-500 ${
                  darkMode
                    ? "opacity-100 scale-100 text-[#FAF9F6]"
                    : "opacity-0 scale-50"
                }`}
              />
              <div
                className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
                ${darkMode ? "translate-x-8 bg-[#FAF9F6]" : "translate-x-0 bg-[#895129]"}`}
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;