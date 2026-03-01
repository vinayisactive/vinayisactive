"use client"

import { nodeTypes } from "@/components/nodes/home-nodes/home-nodes"
import ReactFlowCanvas from "@/components/react-flow-canvas/react-flow-canvas"

export default function Home() {
  return (
    <main className="w-screen h-screen">
     <ReactFlowCanvas nodeTypes={nodeTypes} />
    </main>
  )
}