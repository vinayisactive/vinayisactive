import React, { FC } from "react";
import NameBar from "./name-bar";
import LinkButton from "../buttons/link-button";
import { Projectlink as ProjectLinkProps } from "@/Interfaces/Interface";
import { ProjectInterface } from "@/Interfaces/Interface";


const TitleAndLink: FC<Pick<ProjectInterface, 'name' | 'logoUrl' | 'links'>> = ({name, logoUrl, links}) => {
  return (
    <div className="flex gap-4 justify-start  items-center text-white  w-full">
        <NameBar name={name} logoUrl={logoUrl}/>

      <div className="flex gap-2 items-center">
        {links?.map((link: ProjectLinkProps, index: number) => {
          return (
            <LinkButton
              key={index}
              href={link.url}
              text={link.name}
              icon={true}
              className={`text-black text-sm hover:underline underline-offset-2 ${link.url ? "flex" : "hidden"}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TitleAndLink;
