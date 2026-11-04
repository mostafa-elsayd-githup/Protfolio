import { ArrowRight, Globe2 } from "lucide-react";
import type { Project } from "../../Types/projectDataType";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col xl:flex-row gap-4 bg-(--bg-section)/60 border border-(--color-border) p-4 lg:p-5 rounded-3xl backdrop-blur-xl overflow-hidden max-w-2xl">
      <div className="absolute -inset-px bg-linear-to-r from-(--color-border)/10 to-(--color-border)/10 rounded-3xl pointer-events-none" />
      <div className="relative w-full flex justify-center items-center">
        <div className="relative overflow-visible rounded-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-(--color-border) shadow-2xl transform hover:scale-[1.01] -rotate-3 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <span className="absolute inset-0 bg-(--color-primary)/60 rounded-2xl -z-10 transform transition-all duration-300  "></span>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full  z-10 text-(--color-text)">
        <h2 className="text-md md:text-lg font-bold tracking-tight text-(--color-text)">
          {project.title}
        </h2>
        <p className="text-xs text-(--color-muted) leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-(--bg-section) text-(--color-muted) border border-(--color-border) px-3.5 py-1.5 rounded-xl font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <hr className="border-(--color-border) my-1" />
        <div className="flex items-center gap-6 pt-1">
          <a
            target="_blank"
            href={project.liveUrl}
            className="text-sm font-semibold text-(--color-accent) hover:text-(--color-text) flex items-center gap-1.5 transition-colors"
          >
            <span>Live Demo</span> <ArrowRight className="inline" size={17} />
          </a>
          <a
            target="_blank"
            href={project.githubUrl}
            className="text-sm font-semibold text-(--color-muted) hover:text-(--color-text) flex items-center gap-2 transition-colors"
          >
            <Globe2 size={20} className="inline"/> <span className="">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
