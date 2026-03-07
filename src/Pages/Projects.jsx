import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Store",
    desc: "Modern shopping platform with cart, filtering and API integration.",
    category: "React",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJo7n7XXByw40QwFnGILGMq2BxD55PkKl8yA&s",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio with animations and dark mode.",
    category: "UI",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    desc: "Task management app with CRUD operations and API.",
    category: "Fullstack",
    tech: ["React", "API", "Node"],
    image: "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=",
    github: "#",
    live: "#",
  },
];

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className={`py-24 ${
        darkMode
          ? "bg-gradient-to-br from-[#255265] via-[#203a43] to-[#40758c]"
          : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-serif italic ${darkMode ? "text-white" : "text-gray-800"}`}>
            My Projects
          </h2>
          <p className={`text-sm tracking-widest mt-2 ${darkMode ? "text-yellow-400" : "text-cyan-700"}`}>
            FEATURED WORK
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "React", "Fullstack", "UI"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-5 py-2 rounded-full text-sm transition
              ${
                filter === btn
                  ? "bg-cyan-600 text-white"
                  : darkMode
                  ? "bg-white/10 text-white"
                  : "bg-white border"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-[1px] overflow-hidden 
              bg-gradient-to-r from-cyan-500 to-blue-500`}
            >
              <div
                className={`rounded-2xl h-full transition
                ${
                  darkMode
                    ? "bg-[#1b3d4a]"
                    : "bg-white"
                }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-yellow-400/10 text-yellow-300"
                            : "bg-cyan-100 text-cyan-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 pt-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <FaGithub /> Code
                    </a>

                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;