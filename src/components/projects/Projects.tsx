import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../utils/ProjectsArray";
import { motion } from "framer-motion";
import { slideInLeft } from "../../animations/Variants";
function Projects() {
  return (
    <section id="projects" className="md:my-20 mx-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        viewport={{once:true}}
        className="flex flex-col gap-2 mb-5"
      >
        {SectionHeader("My Projects")}
        {SectionTitle("Featured Projects")}
        <p className="text-(--color-muted)">
          Here are my recent projects that showcase my skills and passion
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
