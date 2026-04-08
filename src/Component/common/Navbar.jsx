import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          ? "bg-[#1A120B]/20 border-[#C08B5C]/20 text-[#FAF9F6]"
          : "bg-[#FAF9F6]/40 border-[#895129]/20 text-[#895129]"
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
            { name: "Resume", id: "educationexperience" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`relative group cursor-pointer transition-all duration-300 ${
                darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#895129]"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${
                  darkMode
                    ? "bg-gradient-to-r from-[#C08B5C] to-[#E6C7A1]"
                    : "bg-gradient-to-r from-[#895129] to-[#C08B5C]"
                }`}
              ></span>
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
                ? "bg-[#3E2723] border-[#C08B5C]/40"
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
                  ? "opacity-100 text-[#C08B5C]"
                  : "opacity-0 scale-50"
              }`}
            />
            <div
              className={`w-6 h-6 rounded-full shadow-lg transform transition-all duration-500
              ${
                darkMode
                  ? "translate-x-8 bg-[#C08B5C]"
                  : "translate-x-0 bg-[#895129]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
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
              ? "bg-[#1A120B]/95 border-[#C08B5C]/20 text-[#FAF9F6]"
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
              className={`cursor-pointer transition ${
                darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#895129]"
              }`}
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
                  darkMode
                    ? "translate-x-8 bg-[#C08B5C]"
                    : "bg-[#895129]"
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