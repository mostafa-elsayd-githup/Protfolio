import About from "./About/About";
import Skills from "./Skills/Skills";

function AboutSkillsSec() {
  return (
    <section
      id="about-skills"
      className="py-16 px-6 lg:px-12 container mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="w-full flex border-b pb-8 lg:border-b-0 lg:border-r lg:pr-5 border-(--color-border) ">
          <About />
        </div>
        <div className="w-full flex">
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default AboutSkillsSec;
