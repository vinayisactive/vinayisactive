"use client"

import { Handle, NodeTypes, Position } from "@xyflow/react"
import Image from "next/image"
import pfp from '@/public/pfp.jpeg'
import Link from "next/link"

function IntroductionNode() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-black rounded-tl-2xl rounded-bl-2xl translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
      
      <div className="relative w-145 bg-white border-2 border-black rounded-tl-2xl rounded-bl-2xl p-0 overflow-hidden flex flex-col">
        
        <div className="h-10 border-b-2 border-black bg-stone-100 flex items-center px-4 justify-between select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-green-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
          </div>
          <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
            
          </div>
        </div>

        <div className="flex p-8 gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 border border-black rounded-full px-3 py-1 bg-green-50 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">Available for work</span>
            </div>

            <div>
              <h1 className="text-5xl font-black text-black tracking-tighter leading-[0.9]">
                VINAY<br/>CHAUDHARY
              </h1>
              <p className="text-sm font-mono text-gray-900 mt-1">
                Full Stack Engineer + Designer
              </p>
            </div>

            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              I structure software from the ground up, optimized for
              <span className="mx-1 relative inline-block">
                <span className="absolute inset-0 bg-green-500/70 -skew-y-2 rounded-sm" />
                <span className="relative z-10 px-1 font-bold text-black">performance</span>
              </span>
              and
              <span className="mx-1 relative inline-block">
                <span className="absolute inset-0 bg-blue-200 skew-y-1 rounded-sm" />
                <span className="relative z-10 px-1 font-bold text-black">evolution</span>
              </span>.
            </p>
          </div>

          <div className="relative shrink-0">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border-l border-r border-white/50 rotate-2 z-20 shadow-sm opacity-80" />
            
            <div className="relative w-40 h-40 bg-white border-2 border-black p-2 shadow-lg rotate-2 group-hover:rotate-1 transition-transform duration-300">
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={pfp} 
                  alt="Vinay" 
                  fill 
                  className="object-cover border border-black/10" 
                />
              </div>
            </div>
          </div>
        </div>

      <Handle id="experience" type="source" position={Position.Left} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      <Handle id="projects" type="source" position={Position.Right} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      <Handle id="experience-mobile" type="source" position={Position.Bottom} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      </div>
    </div>
  )
}

function ExperienceNode({ data }: { data: { role: string, company: string, year: string } }) {
  return (
    <div className="relative w-64 group">
      <div className="absolute -top-8 left-0 w-24 h-10 bg-amber-100 border-2 border-black border-b-0 rounded-t-lg z-0" />
      <div className="relative z-10 bg-amber-50 border-2 border-black rounded-b-lg rounded-tr-lg p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="uppercase tracking-widest text-xs font-bold text-amber-800 mb-1">
          Experience_Log
        </div>
        <h3 className="text-xl font-bold text-black">{data.company}</h3>
        <p className="text-sm font-mono text-gray-700">{data.role}</p>
        <div className="mt-3 inline-block bg-black text-white text-xs px-2 py-1 font-mono rounded">
          {data.year}
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="bg-black! w-3! h-3!" />
      <Handle type="source" position={Position.Bottom} className="bg-black! w-3! h-3!" />
    </div>
  )
}

function ProjectNode({ data }: { data: { title: string, tag: string, media: string, link: string } }) {
  return (
    <div className="relative w-60 bg-white border-2 border-black p-3 pb-8 rotate-1 hover:rotate-0 transition-transform shadow-lg group">
      <div className="relative w-full h-32 bg-neutral-100 border group-hover:border-2 border-black flex items-center justify-center overflow-hidden mb-3">
        <Image src={data.media} fill alt="" />
        <div className=" absolute top-0 left-0 bg-gray-400/05 w-full h-full group-hover:flex group-hover: backdrop-blur-xs hidden justify-center items-center">
            <Link href={data.link} target="_blank" className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer">
              Live Preview 
            </Link>
        </div>
      </div>
      <h4 className="font-mono text-lg leading-none text-black">{data.title}</h4>
      <span className="text-xs font-mono text-white bg-blue-400 px-1">{data.tag}</span>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-red-500/80 backdrop-blur-sm rotate-2 shadow-sm" />

      <Handle type="target" position={Position.Top} className="bg-transparent! border-none!" />
    </div>
  )
}

const nodeTypes: NodeTypes = {
  introduction: IntroductionNode,
  experience: ExperienceNode,
  project: ProjectNode,
}

export {
    IntroductionNode, 
    ExperienceNode, 
    nodeTypes
}