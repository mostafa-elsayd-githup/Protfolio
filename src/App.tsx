import "./App.css";
import AboutSkillsSec from "./components/About&Skills/AboutSkillsSec";
import Contact from "./components/ContactMe/Contact";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavbarSec/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutSkillsSec />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
