import type { Project } from "./types";

export default [
  {
    title: "Autonomous Agentic AI Workflow",
    category: "AI & LLM Orchestration",
    description:
      "Multi-agent reasoning system capable of executing complex tools, code execution, web retrieval, and verified decision making.",
    tags: ["Python", "LangChain", "FastAPI", "React", "Vector DB"],
    link: "https://github.com/masadullahna",
  },
  {
    title: "Enterprise Semantic Search & RAG",
    category: "Generative AI & Data",
    description:
      "Retrieval-Augmented Generation pipeline with hybrid vector/BM25 retrieval, contextual reranking, and sub-second query response.",
    tags: ["RAG", "Embeddings", "FastAPI", "Docker", "TypeScript"],
    link: "https://github.com/masadullahna",
  },
  {
    title: "High-Performance Portfolio Platform",
    category: "Full-Stack Web",
    description:
      "Modern responsive SPA built with React, React Router Hash Routing, and Tailwind CSS v4 following Google Material Design principles.",
    tags: ["React", "TypeScript", "Tailwind CSS v4", "Vite"],
    link: "https://github.com/masadullahna/masadullahna.github.io",
  },
  {
    title: "Real-Time AI Analytics Dashboard",
    category: "Product & Systems",
    description:
      "Interactive data visualization platform monitoring token usage, model latencies, and streaming LLM outputs in real time.",
    tags: ["React", "WebSockets", "FastAPI", "Tailwind CSS"],
    link: "https://github.com/masadullahna",
  },
] as const satisfies readonly Project[];
