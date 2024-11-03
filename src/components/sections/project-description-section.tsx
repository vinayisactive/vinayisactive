import React, { FC } from "react";
import ProjectCard from "@/components/ui/project-card/project-card";
import SectionHeader from "../ui/section-header";
import { projects } from "@/data/data";

const ProjectDescriptionSection: FC = () => {
  return (
    <main className="w-full">
      <SectionHeader
        heading="projects"
        className=" border-darkSlateGray pb-4"
      />

      <div className="flex flex-col items-startl gap-16">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard 
                key={index}
                name={project.name}
                links={project.links}
                logoUrl={project.logoUrl}
                details={project.details}
                />
            )
          })
        }
      </div>
    </main>
  );
};

export default ProjectDescriptionSection;
