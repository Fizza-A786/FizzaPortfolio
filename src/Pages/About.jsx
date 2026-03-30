import React from "react";
import F2 from "../assets/F2.jpg";
import { FaCode, FaWandSparkles } from "react-icons/fa6";

const About = ({ darkMode }) => {
  const stats = [
    { title: "20+", description: "Projects Completed" },
    { title: "50+", description: "Happy Clients" },
    { title: "01+", description: "Years of Experience" },
  ];

  return (
    <section
      id="about"
      className={`py-16 md:py-28 px-6 md:px-20 transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

        {/* IMAGE */}
        <div className="hidden md:flex relative justify-center lg:w-1/2">

          {/* Top Icon */}
          <div className="absolute md:left-8 left-5 top-4 md:top-10 z-10">
            <div
              className={`p-4 rounded-full shadow-xl transition duration-500 hover:rotate-12 hover:scale-110 cursor-pointer ${
                darkMode ? "bg-[#FAF9F6] text-[#895129]" : "bg-[#895129] text-[#FAF9F6]"
              }`}
            >
              <FaCode size={20} />
            </div>
          </div>

          <div className="relative group">

            {/* 🔥 OUTER GLOW ADDED */}
            <div
              className={`absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl z-[-1] ${
                darkMode
                  ? "bg-[#FAF9F6]/40"
                  : "bg-[#895129]/40"
              }`}
            ></div>

            {/* Profile Image */}
            <div
              className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 transition-all duration-500 group-hover:scale-105
                ${
                  darkMode
                    ? "border-[#FAF9F6] shadow-[0_0_30px_rgba(250,249,246,0.4)] group-hover:shadow-[0_0_60px_rgba(250,249,246,0.7)]"
                    : "border-[#895129] shadow-[0_0_30px_rgba(137,81,41,0.3)] group-hover:shadow-[0_0_60px_rgba(137,81,41,0.7)]"
                }`}
            >
              <img
                src={F2}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Icon */}
            <div className="absolute md:bottom-6 bottom-3 right-6 md:right-8">
              <div
                className={`p-4 rounded-full shadow-xl transition duration-500 hover:rotate-12 hover:scale-110 cursor-pointer ${
                  darkMode ? "bg-[#FAF9F6] text-[#895129]" : "bg-[#895129] text-[#FAF9F6]"
                }`}
              >
                <FaWandSparkles size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="lg:w-5xl space-y-12 text-center lg:text-left">

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
                className={`group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl cursor-pointer ${
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