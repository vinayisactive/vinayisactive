import React, { FC } from "react";
import { SkillInterface } from "@/Interfaces/Interface";

const SkillItem: FC<Pick<SkillInterface, 'technologies'>> = ({ technologies }) => {
  return (
    <ul className="flex flex-col gap-1">
      { technologies?.map((tech : string) => {
        return (
          <li key={tech} className="text-[12.9px] text-black">
            <span className="text-black mr-1">-</span> 
            {tech}
          </li>
        )
      })}
    </ul>
  )
}

export default SkillItem;
