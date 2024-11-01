import React, { FC } from "react";
import LinkButton from "./link-button";
import { resume } from "@/data/data";

const ResumeButton: FC = () => {
  return (
    <div
      aria-label="Open for full-time full stack roles"
      className="inline-flex justify-start items-center gap-3 text-sm shrink-0 text-white"
    >
      <p className="px-3 py-1.5 border-2  bg-charcoalGray/50 rounded-xl shrink-0 text-[12px] sm:text-sm">
        Open for full-time full stack roles
      </p>

      <LinkButton
        href={resume.url}
        text={resume.text}
        className={"ml-1 text-black font-semibold hover:underline underline-offset-2"}
      />
    </div>
  )
}

export default ResumeButton
