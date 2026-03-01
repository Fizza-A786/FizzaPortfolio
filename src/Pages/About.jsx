import React from "react";

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img
            src="https://via.placeholder.com/400"
            alt="profile"
          />
        </div>

        {/* Text Content */}
        <div className="about-content">
          <h1>About Me</h1>

          <p>
            Hello! I'm <b>Ates</b>, a passionate Frontend Developer who loves
            building modern and responsive websites. I specialize in creating
            user-friendly interfaces using modern web technologies.
          </p>

          <p>
            I work with technologies like React, JavaScript, HTML, and CSS to
            develop interactive web applications and beautiful user experiences.
          </p>

          <h3>My Skills</h3>

          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Redux Toolkit</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default About;