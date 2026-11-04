import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../utils/ProjectsArray";
function Projects() {
  return (
    <section id="projects" className="py-5 px-6 lg:px-12 container mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        {SectionHeader("My Projects")}
        {SectionTitle("Featured Projects")}
        <p className="text-(--color-muted)">
          Here are my recent projects that showcase my skills and passion
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} project={item}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
