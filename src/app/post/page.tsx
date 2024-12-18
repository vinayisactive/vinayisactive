import React, { FC } from "react";
import MaxWithWrapper from "@/components/ui/wrappers/max-with-wrapper";
import PostSection from "@/components/sections/post-section";

const page: FC = () => {
  return (
    <MaxWithWrapper className="flex flex-col justify-start items-start text-white my-12">
      <PostSection/>
    </MaxWithWrapper>
  );
};

export default page;
