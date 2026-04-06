import About from "../Component/home/About";
import Contact from "../Component/home/Contact";
import Hero from "../Component/home/Hero";
import Projects from "../Component/home/Projects";
import Skills from "../Component/home/Skills";

const Home = ({ darkMode }) => {
  return (
    <div id="home">
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default Home;