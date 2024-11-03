import React, { FC } from "react";
import { SkillInterface } from "@/interfaces/Interface";

const SkillItem: FC<Pick<SkillInterface, 'technologies'>> = ({ technologies }) => {
  return (
    <ul className="flex flex-col gap-1">
      { technologies?.map((tech : string) => {
        return (
          <li key={tech} className="text-[12.9px] text-black/70">
            <span className="text-black mr-1">-</span> 
            {tech.toLocaleLowerCase()}
          </li>
        )
      })}
    </ul>
  )
}

export default SkillItem;
