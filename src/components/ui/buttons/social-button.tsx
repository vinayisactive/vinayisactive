import React, { FC } from "react";
import LinkButton from "./link-button";
import { SocialsInterface as SocialButtonProps } from "@/interfaces/Interface";

const SocialButton: FC<SocialButtonProps> = ({ name, id, url }) => {
  return (
    <div className="flex items-center text-sm rounded-lg group">
      <LinkButton
        text={name}
        href={url}
        icon={false}
        className="py-2 font-bold "
      />

      <span className="text-gray-600 pr-1 font-bold">/</span>

      <LinkButton
        className="text-gray-500 hover:underline hover:underline-offset-4 group-hover:underline group-hover:underline-offset-4"
        text={id}
        href={url}
        icon={true}
      />
    </div>
  );
};

export default SocialButton;
