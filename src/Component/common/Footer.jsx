import React from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-10 transition-all duration-500 border-t ${
        darkMode
          ? " text-[#FAF9F6] border-[#C08B5C]/20"
          : " text-[#895129] border-[#895129]/20"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT */}
        <div className="space-y-4 max-w-sm">
          <h2 className="font-bold text-xl">Fizza Amjad</h2>

          <p
            className={`text-sm ${
              darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/80"
            }`}
          >
            Frontend Developer crafting modern and user-friendly websites.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-2">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/fizza-amjad-377859381" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61588151390765" },
              { icon: <FaWhatsapp />, link: "https://wa.me/923260569202" },
              { icon: <FaGithub />, link: "https://github.com/Fizza-A786" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-[#C08B5C] text-[#1A120B] hover:shadow-[0_4px_15px_rgba(192,139,92,0.5)]"
                    : "bg-[#895129] text-[#FAF9F6] hover:shadow-[0_4px_15px_rgba(137,81,41,0.4)]"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-10 text-sm">

          {/* NAVIGATION */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl">Navigation</h3>

            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block transition-all duration-300 hover:translate-x-1 ${
                  darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#5a341b]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* SERVICES */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl">Services</h3>

            {[
              "Web Design",
              "Frontend Development",
              "Responsive Design",
              "UI/UX Improvement",
            ].map((item, i) => (
              <p
                key={i}
                className={`cursor-pointer transition-all duration-300 hover:translate-x-1 ${
                  darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#5a341b]"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        className={`mt-8 border-t mx-auto max-w-[1300px] ${
          darkMode
            ? "border-[#C08B5C]/20"
            : "border-[#895129]/20"
        }`}
      />

      {/* BOTTOM */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm gap-3 px-6 md:px-12">
        <p className={darkMode ? "text-[#FAF9F6]/60" : "text-[#895129]/70"}>
          © {new Date().getFullYear()} Fizza Amjad. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span
            className={`cursor-pointer transition ${
              darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#5a341b]"
            }`}
          >
            Privacy Policy
          </span>
          <span
            className={`cursor-pointer transition ${
              darkMode ? "hover:text-[#C08B5C]" : "hover:text-[#5a341b]"
            }`}
          >
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;