import React, { FC } from "react";
import LinkButton from "./link-button";
import { SocialsInterface as SocialButtonProps } from "@/Interfaces/Interface";

const SocialButton: FC<SocialButtonProps> = ({ name, id, url }) => {
  return (
    <div className="flex items-center gap-1 text-sm rounded-lg group">
      <div className="py-2 border-darkSlateGray text-black font-bold ">
        {name}
        <span className="text-black pl-1">/</span>
      </div>

      <LinkButton
        className="text-gray-800 hover:underline hover:underline-offset-4 group-hover:underline"
        text={id}
        href={url}
        icon={true}
      />
    </div>
  );
};

export default SocialButton;
