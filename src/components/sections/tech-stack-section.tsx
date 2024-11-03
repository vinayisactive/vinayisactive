import React, { FC } from "react";
import { skills } from "@/data/data";
import { SkillInterface as Skill } from "@/interfaces/Interface";
import SkillColumn from "@/components/ui/skill-column/skill-column";
import SectionHeader from "../ui/section-header";

const TechStackSection: FC = () => {
  return (
    <main className="w-full">
      <SectionHeader
        heading="stack"
        subHeading="building cool web apps with these cool techs."
      />

      <div className="p-4 flex justify-between gap-6 overflow-x-scroll scrollbar bg-black/5 rounded-md">
        {skills?.map((skill: Skill, index: number) => {
          return (
            <SkillColumn
              key={index}
              column={skill.column}
              technologies={skill.technologies}
            />
          )
        })}
      </div>
    </main>
  )
}

export default TechStackSection;
