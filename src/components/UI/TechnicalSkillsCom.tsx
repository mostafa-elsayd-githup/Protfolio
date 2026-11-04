import React from "react";
interface TechnicalProp {
  icon: React.ReactNode;
  skillsName: string;
  skills: string;
}
function TechnicalSkillsCom({ icon, skillsName, skills }: TechnicalProp) {
  return (
    <div className="flex items-center gap-2 bg-(--bg-section) text-(--color-muted) py-10 px-4 rounded-2xl">
      <span>{icon}</span>
      <div className="flex flex-col gap-1">
        <h5 className="bg-(--bg-linear) text-(--color-text) text-md">
          {skillsName}
        </h5>
        <p className="text-xs text-(--color-muted) ">{skills}</p>
      </div>
    </div>
  );
}

export default TechnicalSkillsCom;
