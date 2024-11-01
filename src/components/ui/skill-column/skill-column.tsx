import React, { FC } from "react";
import SkillItem from "./skill-item";
import { SkillInterface as SkillColumnProps } from "@/interfaces/Interface";

const SkillColumn: FC<SkillColumnProps> = ({ column, technologies }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-2 text-black">
      <p className="px-2 py-1.5 font-semibold whitespace-nowrap">
        {column}
      </p>

      <SkillItem technologies={technologies} />
    </div>
  )
}

export default SkillColumn
