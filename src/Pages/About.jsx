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
      className={`overflow-hidden py-5 md:py-10  duration-500 ${
        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-12 flex flex-col lg:flex-row items-center gap-10 md:gap-24">

        {/* IMAGE SECTION */}
        <div
          className="hidden md:flex flex justify-center relative"
          data-aos="fade-right" // ✅ ONLY here
        >

          {/* TOP ICON */}
          <div className="absolute top-5 left-5 md:top-10 z-20">
            <div className={`p-4 rounded-full ${
              darkMode ? "bg-[#C08B5C] text-white shadow-md" : "bg-[#895129] text-white"
            }`}>
              <FaCode />
            </div>
          </div>

          <div className="relative group">

            {/* GLOW */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-0 
              transition-opacity duration-300 
              group-hover:opacity-100 ${
                darkMode ? "bg-[#C08B5C]/30" : "bg-[#895129]/40"
              }`}
            />

            {/* IMAGE */}
            <div
              style={{ transform: "translate3d(0,0,0)" }} // ✅ GPU FIX
              className={`relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2
              transform will-change-transform
              transition-transform duration-300 ease-out
              group-hover:scale-105 ${
                darkMode
                  ? "border-[#C08B5C] shadow-md group-hover:shadow-lg"
                  : "border-[#895129] shadow-sm group-hover:shadow-md"
              }`}
            >
              <img
                src={p3}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* BOTTOM ICON */}
          <div className="absolute bottom-5 right-5 md:right-14 z-20">
            <div className={`p-4 rounded-full ${
              darkMode ? "bg-[#C08B5C] text-white shadow-md" : "bg-[#895129] text-white"
            }`}>
              <FaWandSparkles />
            </div>
          </div>

        </div>

        {/* TEXT SECTION */}
        <div
          className="lg:w-full space-y-12 text-center lg:text-left"
          data-aos="fade-left" // ✅ ONLY here
        >

          {/* TITLE */}
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span
                className={`w-12 h-[2px] ${
                  darkMode ? "bg-[#C08B5C]" : "bg-[#895129]"
                }`}
              />
              <p className="text-sm tracking-[3px] font-medium uppercase">
                About Me
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif leading-tight">
              Passionate{" "}
              <span
                className={`italic ${
                  darkMode ? "text-[#C08B5C]" : "text-[#895129]"
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
              I am a Frontend Developer focused on building clean, modern, and responsive web applications. I specialize in React, JavaScript, HTML, CSS, and Bootstrap, creating fast, user-friendly, and interactive interfaces with a strong emphasis on performance, usability, and design quality.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 cursor-pointer
                transform will-change-transform
                transition-transform duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 ${
                  darkMode
                    ? "bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm hover:shadow-lg"
                    : "bg-[#895129]/10 shadow-sm hover:shadow-md"
                }`}
              >
                <h3 className="text-3xl font-bold">{stat.title}</h3>
                <p
                  className={`mt-2 text-base ${
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