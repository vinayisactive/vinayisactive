import React, { FC } from "react";
import MaxWithWrapper from "../ui/wrappers/max-with-wrapper";
import LinkButton from "../ui/buttons/link-button";
import { resume } from "@/data/data";

const Navbar: FC = () => {
  return (
    <nav>
      <MaxWithWrapper className="flex justify-end items-center gap-6 text-sm text-black font-bold py-6 px-4 lg:px-0">
        <LinkButton 
           href="/" 
           text="/home" 
           target="_self" 
           icon={false} />

        <LinkButton
          href="/post"
          text="/posts"
          target="_self"
          icon={false}
        />

     <LinkButton
        href={resume.url}
        text={resume.text.toLocaleLowerCase()}
        className={"font-semibold underline underline-offset-2"}
        icon={true}
      />
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;
