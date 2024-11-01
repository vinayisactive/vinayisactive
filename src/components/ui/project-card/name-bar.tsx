import React, { FC } from "react";
import Image from "next/image";
import { ProjectInterface } from "@/interfaces/Interface";

const NameBar: FC<Pick<ProjectInterface, "name" | "logoUrl">> = ({name,logoUrl}) => {
  return (
    <div className="flex items-center gap-2 p-1.5 pr-2 rounded-lg bg-black/10">
      <Image
        src={logoUrl}
        alt="logo"
        width={30}
        height={30}
        className="rounded-md"
      />
      <p className="text-sm text-black font-bold md:text-md ">{name}</p>
    </div>
  );
};

export default NameBar;
