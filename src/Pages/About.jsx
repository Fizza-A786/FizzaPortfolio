import React from "react";
import F2 from "../assets/F2.jpg";
import {
  FaCode,
  FaWandSparkles,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaMobileScreen,
} from "react-icons/fa6";

const About = ({ darkMode }) => {
 const stats = [
    {
      title: "20+",
      description: "Projects Completed",
    },
    {
      title: "50+",
      description: "Happy Clients",
    },
    {
      title: "01+",
      description: "Years of Experience",
    },
  ];

  return (
    <section
    id="about"
     className="py-24 px-6 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* IMAGE */}
        <div className="relative flex justify-center lg:w-1/2">

          {/* floating icon */}
          <div className="absolute md:left-8 left-5 top-4 md:top-10 z-10">
            <div className="bg-cyan-800 text-white p-3 rounded-full shadow-lg hover:rotate-12 transition duration-500">
              <FaCode size={18} />
            </div>
          </div>

          <div className="relative group">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-800  shadow-[0_0_40px_rgba(20,184,166,0.4)] group-hover:scale-105 transition duration-500">
              <img src={F2} alt="profile" className="w-full h-full object-cover" />
            </div>

            <div className="absolute md:bottom-6 bottom-3 right-6 md:right-8">
              <div className="bg-yellow-500 text-white p-3 rounded-full shadow-lg group-hover:rotate-12 transition duration-500">
                <FaWandSparkles size={18} />
              </div>
            </div>
          </div>

        </div>

        {/* TEXT */}
        <div className="lg:w-5xl space-y-10 text-center lg:text-left transition-colors duration-500">

          {/* Title */}
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-[2px] bg-yellow-400"></span>
              <p
                className={`text-sm tracking-[3px] font-medium transition-colors duration-500 ${
                  darkMode ? "text-yellow-400" : "text-yellow-400"
                }`}
              >
                ABOUT ME
              </p>
            </div>

            <h1
              className={`text-4xl md:text-[] font-serif transition-colors duration-500 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Passionate{" "}
              <span
                className={`relative italic transition-colors duration-500 ${
                  darkMode ? "bg-gradient-to-r from-[#16bad7] to-[#12aeb0] bg-clip-text text-transparent" : "text-cyan-800"
                }`}
              >
                Frontend Developer
              </span>
            </h1>

            <p
              className={`leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors duration-500 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a frontend developer who loves creating modern, responsive, and interactive websites.{" "}
              <span className={`italic transition-colors duration-500 ${
                darkMode ? "text-white" : "text-gray-600"
              }`}>
                I work with React, JavaScript, Bootstrap , HTML, and CSS
              </span>{" "}
              to build fast and user-friendly web applications.
            </p>
          </div>

          {/* SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`group rounded-xl p-5 transition-transform duration-500 ${
            darkMode
              ? "hover:-translate-y-2 hover:shadow-xl"
              : "hover:-translate-y-2 hover:shadow-lg"
          }`}
        >
          <h3
            className={`text-3xl font-bold transition-colors duration-500 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {stat.title}
          </h3>
          <p
            className={`mt-1 text-sm transition-colors duration-500 ${
              darkMode ? "text-gray-400" : "text-gray-600"
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