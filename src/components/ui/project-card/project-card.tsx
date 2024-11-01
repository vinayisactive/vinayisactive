import React, { FC } from "react";
import DetailListItem from "./detail-list-item";
import TitleAndLink from "./title-and-links";
import { ProjectInterface as ProjectCardProps } from "@/Interfaces/Interface";

const ProjectCard: FC<ProjectCardProps> = ({name, logoUrl, links, details}) => {
  return (
      <div className="w-full flex flex-col items-start gap-2">
        <TitleAndLink name={name} logoUrl={logoUrl} links={links} />

        <ul className="">
          {details?.map((detail, index) => {
            return <DetailListItem key={index} detail={detail} />;
          })}
        </ul>
    </div>
  );
};

export default ProjectCard;
