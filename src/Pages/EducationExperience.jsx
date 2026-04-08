import { Fragment, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSchool } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const EducationExperience = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const primaryColor = darkMode ? "#C08B5C" : "#895129";
  const textColor = darkMode ? "#FAF9F6" : "#895129";
  const cardBg = darkMode ? "rgba(255,255,255,0.05)" : "#ffffff";

  const baseText = "tracking-wide leading-relaxed";

  const education = [
    {
      title: "Matriculation",
      period: "2019 - 2021",
      institution: "Govt APS School, Bahawalpur",
      icon: <FaSchool className="text-white text-xl" />,
    },
    {
      title: "Intermediate",
      period: "2021 - 2023",
      institution: "Post Graduate College, Bahawalpur",
      icon: <FaGraduationCap className="text-white text-xl" />,
    },
  ];

  const experience = [
    {
      title: "React Developer",
      period: "Mar 2025 - Dec 2025",
      company: "Codes Thinker Company",
      icon: <FaCode  className="text-white text-xl" />,
    },
    {
      title: "WordPress Developer",
      period: "Jan 2025 - Present",
      company: "Tech Thrill Company",
      icon: <FaLaptopCode className="text-white text-xl" />,
    },
  ];

  return (
    <Fragment>
      <section id="resume" className="relative md:py-20 py-2 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-12 text-center relative z-10">

          {/* TITLE */}
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-serif italic mb-6"
            style={{ color: textColor }}
          >
            <span style={{ color: primaryColor }}>Education</span> Experience
          </h1>

          <div className="flex flex-col lg:flex-row justify-center gap-12 mt-10">

            {/* EDUCATION */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">

              <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
                <div
                  className="p-4 rounded-full shadow-sm"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <FaGraduationCap
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  />
                </div>

                <h2
                  className="text-2xl font-serif"
                  style={{ color: textColor }}
                >
                  Education
                </h2>
              </div>

              <div
                className="relative pl-12 space-y-12"
                style={{ borderLeft: `3px solid ${primaryColor}40` }}
              >
                {education.map((item, index) => (
                  <div key={index} className="relative group">

                    {/* ICON */}
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={index * 80}
                      className="absolute -left-10 top-0 p-3 rounded-full flex items-center justify-center"
                      style={{
                        background: primaryColor,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* CARD */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                      className={`p-6 rounded-xl border ms-2.5 shadow-sm transition-all duration-500 hover:shadow-2xl ${baseText}`}
                      style={{
                        backgroundColor: cardBg,
                        borderColor: `${primaryColor}30`,
                        color: textColor,
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>

                      <p
                        className="text-sm mb-2"
                        style={{ color: primaryColor }}
                      >
                        {item.period}
                      </p>

                      <p className="text-sm opacity-80">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">

              <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
                <div
                  className="p-4 rounded-full shadow-sm"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <FaBriefcase
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  />
                </div>

                <h2
                  className="text-2xl font-serif"
                  style={{ color: textColor }}
                >
                  Experience
                </h2>
              </div>

              <div
                className="relative pl-12 space-y-12"
                style={{ borderLeft: `3px solid ${primaryColor}40` }}
              >
                {experience.map((item, index) => (
                  <div key={index} className="relative group">

                    <div
                      data-aos="zoom-in"
                      data-aos-delay={index * 80}
                      className="absolute -left-10 top-0 p-3 rounded-full flex items-center justify-center"
                      style={{ background: primaryColor }}
                    >
                      {item.icon}
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                      className={`p-6 rounded-xl border ms-2.5 shadow-sm transition-all  duration-500 hover:shadow-2xl ${baseText}`}
                      style={{
                        backgroundColor: cardBg,
                        borderColor: `${primaryColor}30`,
                        color: textColor,
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>

                      <p
                        className="text-sm mb-2"
                        style={{ color: primaryColor }}
                      >
                        {item.period}
                      </p>

                      <p className="text-sm opacity-80">
                        {item.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EducationExperience;