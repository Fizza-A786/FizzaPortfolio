import React from "react";
import p2 from "../assets/p2.png";
import CV from "../assets/FizzaCV.pdf";

const Hero = ({ darkMode }) => {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "FizzaCV.pdf";
    link.click();
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`overflow-hidden pt-20 py-10 sm:py-16 flex items-center transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse md:flex-row mt-4 md:mt-16 items-center justify-between gap-8 md:gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">

          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mt-2 md:mt-0">
            <span className={`w-8 sm:w-10 h-[2px] ${darkMode ? "bg-[#FAF9F6]" : "bg-[#895129]"}`}></span>
            <p className={`text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] font-medium ${darkMode ? "text-[#FAF9F6]" : "text-[#895129]"}`}>
              PREMIUM FRONTEND DEVELOPER
            </p>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-serif leading-snug md:leading-tight ${darkMode ? "text-[#FAF9F6]" : "text-[#895129]"}`}>
            Hi, I'm
            <br />
            <span className="italic">Fizza Amjad.</span>
          </h1>

          <p className={`text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed ${darkMode ? "text-[#FAF9F6]/90" : "text-[#895129]/90"}`}>
            I'm a <span className="font-semibold">React Frontend Developer</span> creating 
            <span className="italic"> fast, modern, and engaging websites</span> that turn ideas into 
            <span className="font-semibold"> seamless digital experiences</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5 pt-2">

            <button
              onClick={handleDownloadCV}
              className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${
                darkMode
                  ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[0_0_25px_rgba(250,249,246,0.6)]"
                  : "bg-[#895129] text-[#FAF9F6] hover:shadow-[0_0_25px_rgba(137,81,41,0.6)]"
              }`}
            >
              Download CV
            </button>
          
            <button
              onClick={handleScrollToProjects}
              className={`px-6 sm:px-7 py-2 sm:py-2.5 rounded-full border-2 font-semibold transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${
                darkMode
                  ? "border-[#FAF9F6] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#895129] hover:shadow-[0_0_25px_rgba(250,249,246,0.5)]"
                  : "border-[#895129] text-[#895129] hover:bg-[#895129] hover:text-[#FAF9F6] hover:shadow-[0_0_25px_rgba(137,81,41,0.5)]"
              }`}
            >
              See My Work
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex flex-1 justify-center md:mt-0 mt-10 md:justify-end relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px]">

          <div className="relative group">

            {/* FIXED GLOW */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl ${
              darkMode ? "bg-[#FAF9F6]/40" : "bg-[#895129]/40"
            }`}></div>

            <div className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 transition-all duration-500 group-hover:scale-105 ${
              darkMode
                ? "border-[#FAF9F6] shadow-[0_0_15px_rgba(250,249,246,0.25)] group-hover:shadow-[0_0_30px_rgba(250,249,246,0.4)]"
                : "border-[#895129] shadow-[0_0_15px_rgba(137,81,41,0.2)] group-hover:shadow-[0_0_30px_rgba(137,81,41,0.4)]"
            }`}>
              <img src={p2} alt="Fizza" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;