import React from "react";
import p3 from "../../assets/p3.png";
import { FaCode, FaRocket } from "react-icons/fa";

const About = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen py-13 px-6 md:px-16 transition-all duration-500
      ${
        darkMode
          ? "bg-[#71412C] text-[#FAF9F6]"
          : "bg-[#FAF9F6] text-[#5A3E2B]"
      }`}
    >
      {/* Heading */}
      <div className="text-center">
        <h2
          className={`text-4xl md:text-5xl font-serif tracking-wide mt-17 ${
            darkMode ? "text-white" : "text-[#895129]"
          }`}
        >
          About Me
        </h2>

        <p
          className={`mt-3 text-sm md:text-base tracking-wide ${
            darkMode ? "text-white/70" : "text-[#895129]"
          }`}
        >
          Get to know me better
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-14 items-center mt-12">
        
        {/* LEFT SIDE */}
        <div className="space-y-5 text-center md:text-left">
          
          {/* FIXED HEADING COLOR */}
          <h3
            className={`text-2xl md:text-3xl font-semibold ${
              darkMode ? "text-white" : "text-[#895129]"
            }`}
          >
            Passionate Frontend Developer
          </h3>

          {/* PARAGRAPH */}
          <p
            className={`leading-relaxed text-sm md:text-base ${
              darkMode ? "text-white/80" : "text-[#895129]"
            }`}
          >
            I create modern, responsive, and visually appealing web
            applications using React. My goal is to build interfaces that feel
            smooth, fast, and enjoyable.
          </p>

          <p
            className={`leading-relaxed text-sm md:text-base ${
              darkMode ? "text-white/80" : "text-[#895129]"
            }`}
          >
            I focus on clean UI design, user experience, and performance to
            deliver high-quality products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            
            <button
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#d6a16f] to-[#724431]
              text-white shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Hire Me
            </button>

            <button
              className={`px-6 py-2 rounded-full border transition duration-300 hover:scale-105
              ${
                darkMode
                  ? "border-white/50 text-white hover:bg-white hover:text-[#71412C]"
                  : "border-[#895129]/50 text-[#895129] hover:bg-[#895129] hover:text-white"
              }`}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex justify-center relative">

          {/* Icons */}
          <div className="absolute top-8 left-8 animate-bounce">
            <div
              className={`p-4 rounded-full shadow-xl ${
                darkMode ? "bg-white text-[#895129]" : "bg-[#895129] text-white"
              }`}
            >
              <FaCode />
            </div>
          </div>

          <div className="absolute bottom-8 right-8 animate-bounce delay-200">
            <div
              className={`p-4 rounded-full shadow-xl ${
                darkMode ? "bg-white text-[#895129]" : "bg-[#895129] text-white"
              }`}
            >
              <FaRocket />
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div
              className={`absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500
              ${darkMode ? "bg-white/30" : "bg-[#d6a77a]/40"}`}
            ></div>

            <div
              className={`relative z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border transition duration-500 group-hover:scale-105
              ${
                darkMode
                  ? "border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                  : "border-[#895129]/30 shadow-[0_0_30px_rgba(137,81,41,0.25)]"
              }`}
            >
              <img
                src={p3}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;