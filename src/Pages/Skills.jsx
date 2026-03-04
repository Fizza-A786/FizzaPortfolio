import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaSass, FaBootstrap 
} from "react-icons/fa";

const Skills = ({ darkMode }) => {
  const skills = [
    { icon: <FaHtml5 size={28} />, title: "HTML5", description: "Semantic, accessible, and structured markup for modern web apps." },
    { icon: <FaCss3Alt size={28} />, title: "CSS3", description: "Responsive, modern layouts with animations and transitions." },
    { icon: <FaJs size={28} />, title: "JavaScript", description: "Interactive web apps with vanilla JS, ES6+, and DOM manipulation." },
    { icon: <FaReact size={28} />, title: "React.js", description: "Component-based UI, hooks, state management, and routing." },
    { icon: <FaNodeJs size={28} />, title: "Node.js", description: "Basic backend, APIs, and full-stack integration." },
    { icon: <FaGitAlt size={28} />, title: "Git & GitHub", description: "Version control and collaborative development." },
    { icon: <FaSass size={28} />, title: "SASS", description: "Maintainable, modular CSS with variables and mixins." },
    { icon: <FaBootstrap size={28} />, title: "Bootstrap", description: "Responsive components and grids for fast prototyping." },
  ];

  return (
    <section
      id="skills"
      className={`py-24 px-6 md:px-20 transition-colors duration-500 ${
        darkMode ? "bg-gradient-to-br from-[#1a2a34] via-[#203a43] to-[#2f4f5f]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className={`text-4xl font-serif font-bold mb-4 transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-800"}`}>
            My Skills
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Expertise in frontend technologies to create beautiful, interactive, and performant web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-white/5 backdrop-blur-md border border-white/10" : "bg-white/30 backdrop-blur-md border border-gray-200"
              }`}
            >
              <div className={`text-4xl mb-4 transition-colors duration-500 ${darkMode ? "text-teal-400" : "text-cyan-700"}`}>
                {skill.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-800"}`}>
                {skill.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {skill.description}
              </p>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none ${
                  darkMode
                    ? "border-teal-400/50 shadow-[0_0_20px_4px_rgba(22,186,215,0.4)]"
                    : "border-cyan-700/50 shadow-[0_0_20px_4px_rgba(0,198,255,0.4)]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;