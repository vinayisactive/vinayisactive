import React, { FC } from "react";
import { BlogInterface as blog } from "@/Interfaces/Interface";
import { blogs } from "@/data/data";
import LinkButton from "../ui/buttons/link-button";
import SectionHeader from "../ui/section-header";

const BlogSection: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <SectionHeader
        heading="Writes/Blogs"
        subHeading="I write about servers and scaling"
      />

      <div className="flex flex-col gap-3">
        {blogs?.map((blog: blog, index: number) => {
          return (
            <div key={index} className="flex gap-2 items-center text-sm md:text-md">
              <span className="h-5 w-5 flex justify-center items-center rounded-md text-black text-sm bg-white/50">{index+1}</span>

              <LinkButton
                href={blog.url}
                text={blog.title}
                icon={true}
                className=" hover:underline underline-offset-2 text-black"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
