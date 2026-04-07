import React from "react";
import p3 from "../assets/p3.png";
import { FaCode, FaWandSparkles } from "react-icons/fa6";

const About = ({ darkMode }) => {
  const stats = [
    { title: "20+", description: "Projects Completed" },
    { title: "50+", description: "Happy Clients" },
    { title: "01+", description: "Years of Experience" },
  ];

  return (
    <section
    
      className={`overflow-hidden py-10 sm:py-16 transition-colors duration-500 ${
        darkMode ? "bg-[#71412C] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-9 flex flex-col lg:flex-row items-center gap-10 md:gap-24">

        {/* IMAGE */}
         <div className="flex-1 flex justify-center relative">

          {/* ICON TOP */}
          <div className="absolute top-5 left-5 md:top-10 z-20">
            <div className={`p-4 rounded-full ${
              darkMode ? "bg-white text-black" : "bg-[#895129] text-white"
            }`}>
              <FaCode />
            </div>
          </div>

          <div className="relative group">

            {/* GLOW FIXED */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 ${
                darkMode ? "bg-white/40" : "bg-[#895129]/40"
              }`}
            ></div>

            {/* IMAGE */}
            <div
              className={`relative z-10 bg-[#FAF9F6] w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 transition duration-500 group-hover:scale-105 ${
                darkMode
                  ? "border-white shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                  : "border-[#895129] shadow-[0_0_25px_rgba(137,81,41,0.3)]"
              }`}
            >
              <img src={p3} alt="profile" className="w-full h-full object-cover" />
            </div>

          </div>

          {/* ICON BOTTOM */}
          <div className="absolute bottom-5 right-5 md:right-14 z-20">
            <div className={`p-4 rounded-full ${
              darkMode ? "bg-white text-black" : "bg-[#895129] text-white"
            }`}>
              <FaWandSparkles />
            </div>
          </div>

        </div>
        {/* TEXT */}
        <div className="lg:w-full space-y-12 text-center lg:text-left">

          {/* Title */}
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span
                className={`w-12 h-[2px] ${
                  darkMode ? "bg-[#FAF9F6]" : "bg-[#895129]"
                }`}
              ></span>
              <p className="text-sm tracking-[3px] font-medium uppercase">
                About Me
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif leading-tight">
              Passionate{" "}
              <span
                className={`italic ${
                  darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
                }`}
              >
                Frontend Developer
              </span>
            </h1>

            <p
              className={`leading-relaxed text-lg md:text-[17px] max-w-xl mx-auto lg:mx-0 ${
                darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
              }`}
            >
              Hi! I’m a frontend developer who loves bringing ideas to life with clean, modern, and responsive web experiences. 
              <span className="italic font-semibold">
                I specialize in React, JavaScript, HTML, CSS, and Bootstrap
              </span>, crafting fast, user-friendly, and interactive websites that clients love.
              Let’s create something amazing together!
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group rounded-xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl cursor-pointer ${
                  darkMode
                    ? "bg-[#FAF9F6]/10 hover:shadow-[0_10px_30px_rgba(250,249,246,0.3)]"
                    : "bg-[#895129]/10 hover:shadow-[0_10px_30px_rgba(137,81,41,0.3)]"
                }`}
              >
                <h3 className="text-3xl font-bold">{stat.title}</h3>
                <p
                  className={`mt-2 text-base md:text-[14px] ${
                    darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/70"
                  }`}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;