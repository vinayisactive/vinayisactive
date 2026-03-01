"use client"

import {
   ReactFlow,
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
    NodeChange,
    EdgeChange,
    Connection,
    type Edge,
    type Node,
    ReactFlowProvider,
    useReactFlow,
    NodeTypes,
} from "@xyflow/react"

import { useCallback, useEffect, useState } from "react"
import '@xyflow/react/dist/style.css'; 
import { greenGraphBg } from "@/static/graph-bg"
import { desktopNodes, mobileNodes, initialEdges as defaultEdges } from "@/components/nodes/home-nodes/home-nodes-config" 

function Flow({ nodeTypes }: { nodeTypes: NodeTypes }) {

  const { fitView } = useReactFlow();
  const [nodes, setNodes] = useState<Node[]>(desktopNodes)
  const [edges, setEdges] = useState<Edge[]>(defaultEdges)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNodes(mobileNodes);
      } else {
        setNodes(desktopNodes);
      }
      
      setTimeout(() => {
        fitView({ duration: 800, padding: 0.2 });
      }, 100);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fitView]);

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) =>
        addEdge({ ...params, animated: true, style: { strokeWidth: 2 } }, edgesSnapshot)
      ),
    []
  )

  return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        minZoom={0.1}
        maxZoom={4}
        fitViewOptions={{
          padding: 0.2,
          duration: 800, 
        }}
        style={{ backgroundImage: greenGraphBg }}
        proOptions={{ hideAttribution: true }}
      />
  )
}

export default function ReactFlowCanvas({ nodeTypes }: { nodeTypes: NodeTypes }) {
  return (
     <ReactFlowProvider>
        <Flow nodeTypes={nodeTypes} />
    </ReactFlowProvider>
  )
}