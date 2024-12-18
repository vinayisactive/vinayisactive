import React, { FC } from "react";
import { BlogInterface as blog } from "@/interfaces/Interface";
import { blogs } from "@/data/data";
import LinkButton from "../ui/buttons/link-button";
import SectionHeader from "../ui/section-header";

const PostSection: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <SectionHeader
        heading=""
      />

      <ul className="flex flex-col gap-3">
        {blogs?.map((blog: blog, index: number) => {
          return (
            <li key={index} className="flex gap-1 items-start text-sm md:text-md">
              <span className="h-5 w-5 flex justify-center items-center rounded-md text-black text-sm bg-white/50">{index+1}</span>

              <LinkButton
                href={blog.url}
                text={blog.title}
                icon={false}
                className=" hover:underline underline-offset-2 text-black"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostSection;
