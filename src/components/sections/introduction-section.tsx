import React, { FC } from "react";
import Image from "next/image";
import pfp from '../../../public/pfp/pfp.jpg'
import ResumeButton from "@/components/ui/buttons/resume-button";

const IntroductionSection: FC = () => {
  return (
    <main className="flex justify-start items-center gap-8 border-darkSlateGray pb-5 " >
      <div className="hidden md:flex ">
        <Image
          src={pfp}
          alt="Profile Picture"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>

      <div className="text-black flex flex-col justify-between lg:gap-2">
        <h1 className=" text-lg sm:text-2xl md:text-4xl font-bold mb-3">
          Hey, I am Vinay • 20 🌱
        </h1>

        <p className="text-gray-500 font-semibold mb-2 text-sm md:text-lg lg:text-xl">
          A full stack web engineer, skilled in building typesafe and optimized backends,
          sleek reusable components and frontends. With a focus on clean design and
          enhanced user experiences.
        </p>

        <p className=" mb-4 text-sm text-white/80">
          
        </p>

        <ResumeButton />
      </div>
    </main>
  )
}

export default IntroductionSection
