// components/ui/RundownCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Copy,
  ExternalLink,
  Hash,
  Code2,
  Lightbulb,
  BookOpen,
  Check,
} from "lucide-react";
import { useState } from "react";

export type RundownType = "snippet" | "tip" | "resource";

export interface RundownProps {
  id: string;
  type: RundownType;
  title: string;
  tags: string[];
  content: string;
  link?: string;
  date: string;
}

const TYPE_CONFIG = {
  snippet: {
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "group-hover:border-blue-500/50",
    gradient: "from-blue-500/5 to-transparent",
    label: "Code Snippet",
  },
  tip: {
    icon: Lightbulb,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "group-hover:border-emerald-500/50",
    gradient: "from-emerald-500/5 to-transparent",
    label: "Pro Tip",
  },
  resource: {
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "group-hover:border-purple-500/50",
    gradient: "from-purple-500/5 to-transparent",
    label: "Resource",
  },
};

export default function RundownCard({ rundown }: { rundown: RundownProps }) {
  const [copied, setCopied] = useState(false);
  const config = TYPE_CONFIG[rundown.type];
  const Icon = config.icon;

  const handleCopy = () => {
    if (rundown.type === "snippet") {
      navigator.clipboard.writeText(rundown.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        "bg-background/50 backdrop-blur-sm",
        config.border,
        config.hoverBorder
      )}
    >
      {/* Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 pointer-events-none",
          config.gradient
        )}
      />

      {/* Header */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span
            className={cn(
              "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full",
              config.bg,
              config.color
            )}
          >
            <Icon className="w-3 h-3" />
            {config.label}
          </span>
          <span className="text-[10px] text-muted-foreground font-mono">
            {rundown.date}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-tight group-hover:text-foreground transition-colors">
          {rundown.title}
        </h3>
      </div>

      {/* Content Area */}
      <div className="relative z-10 mb-4 text-sm text-muted-foreground">
        {rundown.type === "snippet" ? (
          <div className="relative mt-2 rounded-xl bg-[#0F0F0F] border border-white/5 p-3 font-mono text-xs text-blue-100 overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 flex items-center px-2 space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <pre className="overflow-x-auto pt-6 pb-1">
              <code className="language-javascript">{rundown.content}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-1.5 right-2 p-1 rounded hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              {copied ? (
                <Check className="w-3 h-3 text-green-400" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        ) : (
          <p className="line-clamp-4 leading-relaxed opacity-90">
            {rundown.content}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto pt-4 border-t border-muted/10 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {rundown.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center text-[10px] text-muted-foreground/70 font-mono bg-muted/20 px-1.5 py-0.5 rounded"
            >
              <Hash className="w-2 h-2 mr-0.5 opacity-50" />
              {tag}
            </span>
          ))}
        </div>

        {rundown.link && (
          <a
            href={rundown.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center text-xs font-bold hover:underline",
              config.color
            )}
          >
            Open <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
