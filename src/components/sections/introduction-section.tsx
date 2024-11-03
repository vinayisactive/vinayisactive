import React, { FC } from "react";
import Image from "next/image";
import pfp from '../../../public/pfp.jpg'

const IntroductionSection: FC = () => {
  return (
    <main className="flex justify-start items-center gap-4 border-darkSlateGray pb-5 " >
      <div className="hidden md:flex ">
        <Image
          src={pfp}
          alt="Profile Picture"
          height={250}
          width={250}
          className="rounded-lg"
        />
      </div>

      <div className="text-black flex flex-col justify-between lg:gap-1">
        <h1 className=" text-lg sm:text-2xl md:text-4xl font-bold mb-3">
          hey, i am vinay • 20 🌱
        </h1>

        <p className="text-gray-500 mb-2 text-sm">
          full stack web engineer, skilled in building typesafe and optimized reusable components, frontends and backends. with a focus on clean design and enhanced user experiences.
        </p>

        <p className="mb-1 text-sm text-gray-500">
          open for frontend, backend and full-stack roles. 
        </p>
      </div>
    </main>
  )
}

export default IntroductionSection
