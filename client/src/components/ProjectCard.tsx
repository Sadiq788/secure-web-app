import React from "react";
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  status?: string;
  description: string;
  technologies: string[];
  features: string[];
  codeLink?: string;
  demoLink?: string;
};

export default function ProjectCard({
  title,
  status = "Completed",
  description,
  technologies,
  features,
  codeLink = "#",
  demoLink = "#"
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.01 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-green-300">{title}</h3>
        <span className="text-sm text-green-400 bg-green-900/30 px-2 py-1 rounded">{status}</span>
      </div>

      <p className="text-gray-300 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map(t => <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded">{t}</span>)}
      </div>

      <ul className="text-sm text-gray-300 mb-4 space-y-1">
        {features.map(f => <li key={f} className="flex items-center gap-2">⚡ {f}</li>)}
      </ul>

      <div className="flex gap-3">
        <a href={codeLink} target="_blank" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded bg-green-700/20">
          <Code size={16}/> Code
        </a>
        <a href={demoLink} target="_blank" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded border border-gray-700">
          <ExternalLink size={16}/> Demo
        </a>
      </div>
    </motion.div>
  );
}
