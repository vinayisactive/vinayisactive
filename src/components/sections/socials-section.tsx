import React, { FC } from "react";
import SectionHeader from "../ui/section-header";
import SocialButton from "../ui/buttons/social-button";
import { socials } from "@/data/data";

const SocialLinkSection: FC = () => {
  return (
    <div className="w-full ">
      <SectionHeader 
      heading="contact"
      />

      <div className="flex flex-col lg:flex-row lg:flex-wrap md:gap-2 justify-between ">
        {socials.map((social, index) => {
          return (
            <SocialButton key={index} name={social.name} id={social.id} url={social.url}/>
          )
        })}
      </div>
    </div>
  );
};

export default SocialLinkSection;
