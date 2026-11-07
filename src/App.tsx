import "./App.css";
import AboutSkillsSec from "./components/About&Skills/AboutSkillsSec";
import Contact from "./components/ContactMe/Contact";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavbarSec/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="lg:px-4 container mx-auto">
        <AboutSkillsSec />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
