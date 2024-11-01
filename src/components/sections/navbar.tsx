import React, { FC } from "react";
import MaxWithWrapper from "../ui/wrappers/max-with-wrapper";
import LinkButton from "../ui/buttons/link-button";

const Navbar: FC = () => {
  return (
    <nav>
      <MaxWithWrapper className="flex justify-end items-center gap-4 text-sm text-black font-bold py-6 px-4 lg:px-0">
        <LinkButton 
           href="/" 
           text="home" 
           target="_self" 
           icon={false} />

        <LinkButton
          href="/blogs"
          text="catch my blog drops📝"
          target="_self"
          className="underline underline-offset-2"
          icon={true}
        />
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;
