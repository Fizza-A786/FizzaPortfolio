import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/80 to-black/90" />

      <section className="relative z-10 px-8 md:px-24 py-24">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          data-aos="fade-right"
        >
          About <span className="text-purple-400">Me</span>
        </h2>

        {/* Description */}
        <p
          className="max-w-3xl text-lg text-gray-300 mb-8 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          I am a passionate Frontend Developer with strong expertise in building
          modern, responsive, and scalable web applications. I specialize in
          React.js, Tailwind CSS, and modern JavaScript, focusing on clean code,
          performance, and smooth user experiences.
        </p>

        <p
          className="max-w-3xl text-lg text-gray-300 mb-10 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          I enjoy turning complex problems into simple, beautiful interfaces.
          My goal is to create fast-loading, user-friendly, and visually
          appealing web solutions that help businesses grow and users enjoy
          seamless digital experiences.
        </p>

        {/* Skills */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "React.js",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "Redux Toolkit",
              "REST APIs",
              "Git & GitHub",
              "Responsive Design",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-purple-500/50 rounded-full text-sm text-purple-300 hover:bg-purple-600 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience / Mission */}
        <div
          className="mt-14 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            My Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            To deliver high-quality frontend solutions with modern technologies,
            clean architecture, and great user experience. I aim to continuously
            learn, grow, and contribute to impactful digital products.
          </p>
        </div>
      </section>
    </div>
  );
}
