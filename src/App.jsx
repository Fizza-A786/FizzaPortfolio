import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import videoBg from "./assets/bg.mp4";

const App = () => {
  return (
    <div className="main">

      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="content">
        <Navbar/>
        <Hero/>
        <About/>
      </div>

    </div>
  );
};

export default App;