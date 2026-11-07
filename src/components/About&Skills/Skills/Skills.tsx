import { FaGithub, FaReact } from "react-icons/fa";
import SectionHeader from "../../UI/SectionHeader";
import SectionTitle from "../../UI/SectionTitle";
import TechnicalSkillsCom from "../../UI/TechnicalSkillsCom";
import { Database, Layers } from "lucide-react";

function Skills() {
  return (
    <section
      id="skills"
      className=" text-sm lg:text-gl lg:flex-row pt-4 w-full "
    >
      <div className="flex flex-col gap-2">
        <SectionHeader header="My Skills" />
        <SectionTitle title="Technical Skills " />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <TechnicalSkillsCom
            icon={<FaReact size={35} className="text-(--color-ReactIcon)" />}
            skillsName="ForntEnd"
            skills="React, TypeScript, HTML, CSS, Tailwind"
          />
          <TechnicalSkillsCom
            icon={<Layers size={35} className="text-(--color-stateManagementIcon)" />}
            skillsName="State Management"
            skills="Tanstack Query, Zustand, Context API"
          />
          <TechnicalSkillsCom
            icon={<Database size={35} className="text-(--color-backEndIcon)" />}
            skillsName="BackEnd & DB"
            skills="Supabase, RESET APIS"
          />
          <TechnicalSkillsCom
            icon={<FaGithub size={35} className="text-(--color-gitHupIcon)" />}
            skillsName="Tools"
            skills="Git, GitHup, Vercel, Framer Motion"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
