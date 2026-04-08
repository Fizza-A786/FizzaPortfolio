import React, { useEffect } from "react";
import p2 from "../assets/p2.png";
import CV from "../assets/FizzaCV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ darkMode }) => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

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
      className={`overflow-hidden pt-10 py-10 md:py-10 flex items-center transition-colors duration-500 ${
        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 w-full flex flex-col-reverse md:flex-row mt-4 md:mt-10 items-center justify-between gap-8 md:gap-16">

        {/* LEFT CONTENT */}
        <div
          className="flex-1 text-center md:text-left space-y-6 md:space-y-8"
          data-aos="fade-right"
        >

          <div
            className="flex items-center justify-center md:justify-start gap-2 md:gap-3"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className={`w-10 h-[2px] ${darkMode ? "bg-[#C08B5C]" : "bg-[#895129]"}`}></span>
            <p className={`text-sm tracking-[3px] font-medium ${
              darkMode ? "text-[#C08B5C]" : "text-[#895129]"
            }`}>
              PREMIUM FRONTEND DEVELOPER
            </p>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-snug md:leading-tight"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Hi, I'm <br />
            <span className={`italic ${
              darkMode ? "text-[#C08B5C]" : "text-[#895129]"
            }`}>
              Fizza Amjad.
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed ${
              darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/90"
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I'm a <span className="font-semibold">React Frontend Developer</span> creating
            <span className="italic"> fast, modern, and engaging websites</span> that turn ideas into
            <span className="font-semibold"> seamless digital experiences</span>.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5 pt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className={`px-7 py-3 rounded-full font-semibold 
              transform will-change-transform
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-105
              ${
                darkMode
                  ? "bg-[#C08B5C] text-[#FAF9F6] shadow-md hover:shadow-[0_10px_30px_rgba(192,139,92,0.5)]"
                  : "bg-[#895129] text-[#FAF9F6] shadow-sm hover:shadow-[0_10px_30px_rgba(137,81,41,0.5)]"
              }`}
            >
              Download CV
            </button>

            {/* See Work */}
            <button
              onClick={handleScrollToProjects}
              className={`px-7 py-2.5 rounded-full border-2 font-semibold 
              transform will-change-transform
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-105
              ${
                darkMode
                  ? "border-[#C08B5C] text-[#C08B5C] hover:bg-[#C08B5C] hover:text-[#FAF9F6] hover:shadow-[0_10px_30px_rgba(192,139,92,0.4)]"
                  : "border-[#895129] text-[#895129] hover:bg-[#895129] hover:text-[#FAF9F6] hover:shadow-[0_10px_30px_rgba(137,81,41,0.4)]"
              }`}
            >
              See My Work
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="hidden md:flex flex-1 justify-center md:justify-end relative w-full max-w-[500px]"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >

          <div className="relative group will-change-transform">

            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 blur-2xl ${
                darkMode ? "bg-[#C08B5C]/30" : "bg-[#895129]/40"
              }`}>
            </div>

            {/* Image */}
            <div
              style={{ transform: "translateZ(0)" }}
              className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2
              transform will-change-transform
              transition-transform duration-300 ease-out
              group-hover:scale-105 ${
                darkMode
                  ? "border-[#C08B5C] shadow-md group-hover:shadow-lg"
                  : "border-[#895129] shadow-sm group-hover:shadow-md"
              }`}
            >
              <img src={p2} alt="Fizza" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;