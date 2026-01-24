import Navbar from "./Component/Navbar";
import HomePage from "./Pages/Home";
import AboutMe from "./Pages/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default App;
