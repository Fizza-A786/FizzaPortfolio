import React from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-10 transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT */}
        <div className="space-y-4 max-w-sm">
          <h2 className="font-bold text-xl">Fizza Amjad</h2>
          <p className={`text-sm ${
            darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
          }`}>
            Frontend Developer crafting modern and user-friendly websites.
          </p>

          {/* Social Icons (Circle + Hover) */}
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
    ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[0_4px_15px_rgba(137,81,41,0.4)]"
    : "bg-[#895129] text-[#FAF9F6] hover:shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT - NAV LINKS (Connected with Navbar) */}
        <div className="grid grid-cols-2 gap-8 text-sm">

          {/* Navigation */}
          <div className="space-y-2">
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
                className="block  hover:translate-x-1 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Services / Portfolio */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Services</h3>

            {[
              "Web Design",
              "Frontend Development",
              "Responsive Design",
              "UI/UX Improvement",
            ].map((item, i) => (
              <p
                key={i}
                className=" hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className={`mt-8 border-t ${
        darkMode ? "border-[#FAF9F6]/20" : "border-[#895129]/20"
      }`} />

      {/* Bottom */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm gap-3 px-6 md:px-12">
        <p className={darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/70"}>
          © {new Date().getFullYear()} Fizza Amjad. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;