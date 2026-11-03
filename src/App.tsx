import "./App.css";
import AboutSkillsSec from "./components/About&Skills/AboutSkillsSec";
import Contact from "./components/ContactMe/Contact";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavbarSec/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="text-white container w-full m-auto">
      <Navbar />
      <Hero />
      <AboutSkillsSec />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
