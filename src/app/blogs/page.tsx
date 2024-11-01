import React, { FC } from "react";
import MaxWithWrapper from "@/components/ui/wrappers/max-with-wrapper";
import { BlogSection } from "@/components/sections";

const page: FC = () => {
  return (
    <MaxWithWrapper className="flex flex-col justify-start items-start text-white my-12">
      <BlogSection/>
    </MaxWithWrapper>
  );
};

export default page;
