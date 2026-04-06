import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecommerce from "../../assets/ecommerce.png";
import lundary from "../../assets/lundary.jpg";
import charity from "../../assets/charity.jpeg";
import lawyerImg from "../../assets/lawyer.jpg";
import pest from "../../assets/pest.png";
import foodymat from "../../assets/foodymat.jpg";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "A modern and fully responsive e-commerce web application built with React and Redux Toolkit.",
    category: "React",
    tech: ["React", "Redux Toolkit", "CSS", "Bootstrap"],
    image: ecommerce,
    github: "https://github.com/Fizza-A786/",
    live: "https://e-commence-olive.vercel.app/",
  },
  {
    title: "Laundry Website",
    desc: "Responsive laundry service website with clean UI.",
    category: "React",
    tech: ["React", "Tailwind", "ReduxToolkit"],
    image: lundary,
    github: "https://github.com/Fizza-A786/",
    live: "https://lundary.vercel.app/",
  },
  {
    title: "charity",
    desc: "Modern dark portfolio website.",
    category: "HTML&CSS",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    image: charity,
    github: "https://github.com/Fizza-A786/",
    live: "https://charity-blush-psi.vercel.app/",
  },
  {
    title: "Lawyer",
    desc: "Professional lawyer site built with React.",
    category: "React",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: lawyerImg,
    github: "https://github.com/Fizza-A786/",
    live: "https://lawyer-pi-three.vercel.app/",
  },
  {
    title: "Pest Control",
    desc: "Task management web app using JS, Node & API.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JS", "Node", "API"],
    image: pest,
    github: "https://github.com/Fizza-A786/",
    live: "https://pest-control-omega.vercel.app/",
  },
  {
    title: "foodymat",
    desc: "Creative landing page for books.",
    category: "HTML&CSS",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    image: foodymat,
    github: "https://github.com/Fizza-A786/",
    live: "https://restaurant-rho-ruddy.vercel.app/",
  },
];

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category.trim().toLowerCase() === filter.trim().toLowerCase()
        );

  return (
    <section
      className={`py-10 sm:py-16 transition-colors duration-500 ${
        darkMode ? "bg-[#71412C] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif italic">My Projects</h2>
          <p className="text-sm tracking-widest mt-2 opacity-70">
            FEATURED WORK
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["All", "HTML&CSS", "JavaScript", "React"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === btn
                  ? darkMode
                    ? "bg-white text-black scale-105"
                    : "bg-[#895129] text-white scale-105"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div key={i} className="group rounded-xl overflow-hidden">

              <div
                className={`h-full rounded-2xl transition duration-500 backdrop-blur-xl hover:-translate-y-2 ${
                  darkMode
                    ? "bg-white/10 shadow-[0_8px_25px_rgba(250,249,246,0.3)]"
                    : "bg-[#895129]/10 shadow-[0_8px_20px_rgba(137,81,41,0.3)]"
                }`}
              >
                
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-700"
                  />

                  {/* ✅ FIXED OVERLAY */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6 ${
                      darkMode
                        ? "bg-black/60"
                        : "bg-white/70 backdrop-blur-sm"
                    }`}
                  >
                    <a
                      href={project.github}
                      className="p-3 rounded-full bg-white text-black hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 rounded-full bg-white text-black hover:scale-110"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm opacity-70">
                    {project.desc}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-6 pt-2 text-sm">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 hover:text-cyan-400"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 hover:text-cyan-400"
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