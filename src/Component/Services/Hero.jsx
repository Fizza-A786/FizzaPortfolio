import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Hero = ({ darkMode }) => {
  return (
    <section
      className={`min-h-[70vh] flex items-center justify-center px-6 md:px-16 transition-all duration-500
      ${
        darkMode
          ? "bg-[#71412C] text-white"
          : "bg-[#FAF9F6] text-[#5A3E2B]"
      }`}
    >
      <div className="max-w-6xl w-full text-center mt-26 space-y-10">

        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif">
            My <span className="italic text-[#d6a77a]">Services</span>
          </h1>

          <p
            className={`mt-4 max-w-2xl mx-auto text-sm md:text-base ${
              darkMode ? "text-white/70" : "text-[#5A3E2B]/70"
            }`}
          >
            I provide modern frontend solutions to help your ideas turn into
            beautiful and functional digital experiences.
          </p>
        </div>

        {/* Services Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* Card 1 */}
          <div
            className={`group p-6 rounded-2xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            ${
              darkMode
                ? "bg-white/10 border border-white/20"
                : "bg-white border border-[#895129]/20"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto
              ${
                darkMode
                  ? "bg-white text-[#71412C]"
                  : "bg-[#895129] text-white"
              }`}
            >
              <FaCode />
            </div>

            <h3 className="font-semibold text-lg">Web Development</h3>
            <p className="text-sm opacity-70 mt-2">
              Building responsive and fast websites using modern technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`group p-6 rounded-2xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            ${
              darkMode
                ? "bg-white/10 border border-white/20"
                : "bg-white border border-[#895129]/20"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto
              ${
                darkMode
                  ? "bg-white text-[#71412C]"
                  : "bg-[#895129] text-white"
              }`}
            >
              <FaPaintBrush />
            </div>

            <h3 className="font-semibold text-lg">UI/UX Design</h3>
            <p className="text-sm opacity-70 mt-2">
              Designing clean, user-friendly and visually appealing interfaces.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`group p-6 rounded-2xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            ${
              darkMode
                ? "bg-white/10 border border-white/20"
                : "bg-white border border-[#895129]/20"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto
              ${
                darkMode
                  ? "bg-white text-[#71412C]"
                  : "bg-[#895129] text-white"
              }`}
            >
              <FaMobileAlt />
            </div>

            <h3 className="font-semibold text-lg">Responsive Design</h3>
            <p className="text-sm opacity-70 mt-2">
              Making websites look perfect on mobile, tablet, and desktop.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;