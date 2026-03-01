"use client"

import { Handle, NodeTypes, Position } from "@xyflow/react"
import Image from "next/image"

function IntroductionNode({ data }: { data: { label: string, sub: string } }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-black rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
      
      <div className="relative w-75 bg-white/90 backdrop-blur-sm border-2 border-black rounded-2xl p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
        </div>
        <h1 className="text-3xl font-black tracking-tighter text-black">
          Ashwry Chaudhary
        </h1>
        <p className="font-mono text-sm text-gray-600 leading-tight">
          I craft digital experiences with code & pixel-perfect precision.
        </p>
        
        <Handle type="source" position={Position.Bottom} className="bg-black! w-4! h-4! border-2! border-white!" />
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

function ProjectNode({ data }: { data: { title: string, tag: string, media: string } }) {
  return (
    <div className="relative w-60 bg-white border-2 border-black p-3 pb-8 rotate-1 hover:rotate-0 transition-transform shadow-lg">
      <div className="relative w-full h-32 bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden mb-3">
        <Image src={data.media} fill alt="" />
      </div>
      <h4 className="font-bold text-lg leading-none text-black">{data.title}</h4>
      <span className="text-xs font-mono text-gray-500">{data.tag}</span>
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