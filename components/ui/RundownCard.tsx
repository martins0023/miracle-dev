// components/ui/RundownCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Hash, Terminal } from "lucide-react";
import { useState } from "react";

export type RundownType = "snippet" | "tip" | "resource";

export interface RundownProps {
  id: string;
  type: RundownType;
  title: string;
  tags: string[];
  content: string; // Could be code or text
  link?: string;
  date: string;
}

export default function RundownCard({ rundown }: { rundown: RundownProps }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (rundown.type === 'snippet') {
      navigator.clipboard.writeText(rundown.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between rounded-xl border border-muted/40 bg-muted/5 p-5 hover:border-cyber/40 transition-colors duration-300"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-cyber/80 bg-cyber-dim px-1.5 py-0.5 rounded">
            {rundown.type.toUpperCase()}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{rundown.date}</span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-tight group-hover:text-cyber transition-colors">
          {rundown.title}
        </h3>
      </div>

      {/* Content Area */}
      <div className="mb-4 text-sm text-muted-foreground">
        {rundown.type === "snippet" ? (
          <div className="relative mt-2 rounded-md bg-[#050505] border border-muted/20 p-3 font-mono text-xs text-gray-300 overflow-hidden">
             {/* Fake Terminal Header */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-white/5" />
             <pre className="overflow-x-auto">
               <code>{rundown.content}</code>
             </pre>
             <button 
                onClick={handleCopy}
                className="absolute top-2 right-2 p-1.5 rounded-md bg-muted/20 hover:bg-cyber/20 text-muted-foreground hover:text-cyber transition-all"
             >
                {copied ? <span className="text-[10px] font-bold">COPIED</span> : <Copy className="w-3 h-3" />}
             </button>
          </div>
        ) : (
          <p className="line-clamp-4">{rundown.content}</p>
        )}
      </div>

      {/* Footer / Link */}
      <div className="mt-auto pt-4 border-t border-muted/20 flex items-center justify-between">
        <div className="flex gap-2">
          {rundown.tags.map(tag => (
            <span key={tag} className="flex items-center text-[10px] text-muted-foreground font-mono">
              <Hash className="w-2 h-2 mr-0.5" />{tag}
            </span>
          ))}
        </div>
        
        {rundown.link && (
          <a href={rundown.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyber transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}