import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = ({ darkMode }) => {
  const data = [
    {
      title: "BS SoftWare engineer",
      place: "Islamia University",
      year: "2026 - Present",
      icon: <FaGraduationCap />,
    },
    {
      title: "Intermediate",
      place: "Superior College",
      year: "2022 - 2024",
      icon: <FaSchool />,
    },
    {
      title: "Matric",
      place: "Govt Girls High Secondary School",
      year: "2020- 2022",
      icon: <FaSchool />,
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 px-6 md:px-16 transition-all duration-500
      ${
        darkMode
          ? "bg-[#71412C] text-white"
          : "bg-[#FAF9F6] text-[#5A3E2B]"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className={`text-4xl md:text-5xl font-serif ${
            darkMode ? "text-white" : "text-[#5A3E2B]"
          }`}
        >
          My{" "}
          <span
            className={`italic ${
              darkMode ? "text-[#d6a77a]" : "text-[#895129]"
            }`}
          >
            Education
          </span>
        </h2>

        <p
          className={`mt-3 ${
            darkMode ? "text-white/70" : "text-[#5A3E2B]/70"
          }`}
        >
          My academic background
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            ${
              darkMode
                ? "bg-white/10 border border-white/20"
                : "bg-white border border-[#895129]/20"
            }`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-lg
              transition duration-300 group-hover:scale-110
              ${
                darkMode
                  ? "bg-white text-[#895129]"
                  : "bg-[#895129] text-white"
              }`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <h3
              className={`text-lg font-semibold mb-1 ${
                darkMode ? "text-white" : "text-[#5A3E2B]"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`text-sm ${
                darkMode ? "text-white/70" : "text-[#5A3E2B]/70"
              }`}
            >
              {item.place}
            </p>

            <p
              className={`text-xs mt-1 ${
                darkMode ? "text-white/50" : "text-[#5A3E2B]/50"
              }`}
            >
              {item.year}
            </p>

            {/* Bottom Line */}
            <div
              className={`mt-4 h-[2px] w-0 transition-all duration-300 group-hover:w-full
              ${darkMode ? "bg-white/60" : "bg-[#895129]/60"}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;