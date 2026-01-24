import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLink =
    "relative text-white text-sm font-medium px-3 py-2 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          >
            Fizza<span className="text-purple-500"> A.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 max-w-xl">
            <Link to="/" className={navLink}>Home</Link>
            <Link to="/about" className={navLink}>About</Link>
            <Link to="/skills" className={navLink}>Skills</Link>
            <Link to="/projects" className={navLink}>Projects</Link>
            <Link to="/contact" className={navLink}>Contact</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-purple-600 px-4 py-4 flex flex-col space-y-2 animate-slideDown">
          <Link to="/" className={navLink} onClick={toggleMenu}>Home</Link>
          <Link to="/about" className={navLink} onClick={toggleMenu}>About</Link>
          <Link to="/skills" className={navLink} onClick={toggleMenu}>Skills</Link>
          <Link to="/projects" className={navLink} onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className={navLink} onClick={toggleMenu}>Contact</Link>

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="mt-2 block bg-purple-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-purple-700 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
