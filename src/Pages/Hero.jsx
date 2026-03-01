import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Hello, I'm Ates</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "UI Designer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          I build modern, responsive and interactive web applications
          using React and modern technologies.
        </p>

        <button className="btn">View Projects</button>

      </div>

    </section>
  );
};

export default Hero;