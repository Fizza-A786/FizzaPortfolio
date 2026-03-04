import React from "react";
import F1 from "../assets/F1.png";

const Hero = ({ darkMode }) => {
  return (
    <section 
     id="home" 
      className={`min-h-screen flex items-center px-4 sm:px-6 md:px-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#255265] via-[#203a43] to-[#40758c]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row mt-10 md:mt-16 items-center justify-between gap-10 md:gap-16">

        {/* LEFT CONTENT */}
        <div
          className={`flex-1 text-center md:text-left space-y-6 md:space-y-8 transition-colors duration-500 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {/* Small Tag */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mt-6 md:mt-0">
            <span className="w-8 sm:w-10 h-[2px] bg-yellow-400"></span>
            <p className="text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] text-yellow-400 font-medium">
              PREMIUM FRONTEND DEVELOPER
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-serif leading-snug md:leading-tight transition-colors duration-500`}
          >
            Hi, I'm
            <br />
            <span
              className={`relative inline-block italic transition-colors duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-[#16bad7] to-[#12aeb0] bg-clip-text text-transparent"
                  : "text-cyan-800"
              }`}
            >
              Fizza Amjad.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-[18px] max-w-xl mx-auto md:mx-0 leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            React Frontend Developer passionate about building{" "}
            <span
              className={`font-semibold transition-colors duration-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              responsive, high-performance web applications
            </span>{" "}
            using modern UI technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5 pt-4">
            {/* Download CV */}
            <button
              className={`inline-block px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 ${
                darkMode
                  ? "bg-gradient-to-r from-[#0097b2] to-[#0C7779] text-white hover:shadow-cyan-500/60"
                  : "bg-gradient-to-r from-[#0097b2] to-[#0C7779] text-white hover:bg-cyan-800 hover:shadow-cyan-400/40"
              }`}
            >
              Download CV
            </button>

            {/* See My Work */}
            <button
              className={`inline-block px-6 sm:px-7 py-2 sm:py-2.5 rounded-full border-2 font-semibold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ${
                darkMode
                  ? "border-[#5aaacd] text-[#5aaacd] hover:bg-gradient-to-r from-[#0097b2] to-[#0C7779] hover:text-white hover:shadow-2xl shadow-cyan-400"
                  : "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white hover:shadow-2xl shadow-cyan-300"
              }`}
            >
              See My Work
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:mt-0 mt-15 md:justify-end relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px]">
          {/* Glow behind image */}
          <div
            className={`absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full -z-10 blur-3xl transition-colors duration-500 ${
              darkMode ? "bg-teal-600/30" : "bg-cyan-500/20"
            }`}
          ></div>

          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full overflow-hidden border-4 border-cyan-800 shadow-[0_0_40px_rgba(20,184,166,0.4)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(20,184,166,0.6)]">
            <img
              src={F1}
              alt="Fizza"
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;