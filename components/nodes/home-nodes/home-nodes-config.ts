"use client";

import type { Node, Edge } from "@xyflow/react";
import fwl from "@/public/fwl.png";
import uchs from "@/public/uchs.png";

const nodeData = {
  intro: { label: "Me" },
  exp1: {
    company: "Flinque (TG3)",
    role: "Backend Engineer",
    year: "2025/Dec - Now",
  },
  exp2: {
    company: "Vitrify (TG3)",
    role: "Full Stack Engineer",
    year: "2025/April - Now",
  },
  proj1: { 
    title: "Formwavelabs", 
    tag: "Producitivy / Utility", 
    media: fwl, 
    link: "http://formwavelabs.vercel.app"
  },
  proj2: {
    title: "useCustomHookSpace",
    tag: "DX (developer experience)",
    media: uchs,
    link: "https://usecustomhookspace.vercel.app"
  },
};

export const desktopNodes: Node[] = [
  {
    id: "1",
    type: "introduction",
    position: { x: -125, y: -50 },
    data: nodeData.intro,
  },
  {
    id: "2",
    type: "experience",
    position: { x: -500, y: 350 },
    data: nodeData.exp1,
  },
  {
    id: "3",
    type: "experience",
    position: { x: -420, y: 600 },
    data: nodeData.exp2,
  },
  {
    id: "4",
    type: "project",
    position: { x: 550, y: 300 },
    data: nodeData.proj1,
    zIndex: 1
  },
  {
    id: "5",
    type: "project",
    position: { x: 750, y: 100 },
    data: nodeData.proj2,
  },
];

export const mobileNodes: Node[] = [
  {
    id: "1",
    type: "introduction",
    position: { x: -100, y: 0 },
    data: nodeData.intro,
  },
  {
    id: "2",
    type: "experience",
    position: { x: 200, y: 300 },
    data: nodeData.exp1,
  },
  {
    id: "3",
    type: "experience",
    position: { x: 190, y: 550 },
    data: nodeData.exp2,
  },
  {
    id: "4",
    type: "project",
    position: { x: -160, y: 400 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: -120, y: 700 },
    data: nodeData.proj2,
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "experience",
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "5,5",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "default",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
];
