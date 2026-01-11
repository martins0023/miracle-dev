// app/rundowns/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Database, Sparkles, Filter } from "lucide-react";
import RundownCard, { RundownProps } from "@/components/ui/RundownCard";
import { cn } from "@/lib/utils";

// --- DUMMY DATA ---
const RUNDOWNS_DATA: RundownProps[] = [
  {
    id: "001",
    type: "snippet",
    title: "Secure Headers in Next.js",
    date: "2024-01-15",
    tags: ["security", "nextjs"],
    content: `// next.config.js
{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
},
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
}`,
  },
  {
    id: "002",
    type: "tip",
    title: "Avoid 'dangerouslySetInnerHTML'",
    date: "2024-01-10",
    tags: ["react", "security"],
    content:
      "Even if you sanitize input, using this prop opens up XSS vectors if the sanitizer misses a specific HTML5 edge case. Always prefer React's default escaping or use a dedicated library like 'dompurify'.",
  },
  {
    id: "003",
    type: "resource",
    title: "RAG Implementation Guide",
    date: "2023-12-28",
    tags: ["ai", "rag"],
    link: "https://python.langchain.com/docs/use_cases/question_answering/",
    content:
      "A fantastic deep dive into Retrieval-Augmented Generation using LangChain. It explains how to bridge your custom data with LLMs efficiently.",
  },
  {
    id: "004",
    type: "snippet",
    title: "Tailwind Grid Masonry Hack",
    date: "2023-11-20",
    tags: ["css", "ui"],
    content: `.grid-masonry {
  columns: 3 200px;
  gap: 1rem;
}
.grid-item {
  break-inside: avoid;
}`,
  },
  {
    id: "005",
    type: "tip",
    title: "Handling JWTs on the Client",
    date: "2023-10-05",
    tags: ["auth", "security"],
    content:
      "Never store JWTs in localStorage. It is accessible by any JS code running on your page (XSS). Store them in httpOnly cookies.",
  },
];

const FILTERS = ["All", "Security", "Next.js", "AI", "UI/UX"];

export default function RundownsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredRundowns = RUNDOWNS_DATA.filter((item) => {
    const matchesFilter =
      activeFilter === "All"
        ? true
        : item.tags.some(
            (t) =>
              t.toLowerCase().includes(activeFilter.toLowerCase()) ||
              (activeFilter === "Next.js" && item.tags.includes("nextjs")) ||
              (activeFilter === "UI/UX" &&
                (item.tags.includes("ui") || item.tags.includes("css")))
          );

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="w-full pb-24 pt-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Database className="w-3.5 h-3.5" />
            <span>/var/www/vault</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Knowledge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Vault.
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            A digital garden of code snippets, security patches, and
            architectural decisions I've made in the field.
          </p>
        </div>

        {/* Search Bar (Styled) */}
        <div className="relative w-full md:w-80 group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-purple-400 transition-colors">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-muted/20 border border-muted/50 rounded-xl py-3 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 focus:bg-background transition-all placeholder:text-muted-foreground/40 shadow-sm"
          />
          {/* Decorative Sparkle */}
          <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-purple-400/50 opacity-0 group-focus-within:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Filter Tabs (App Style) */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide mask-fade-right">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted/20 mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border active:scale-95",
              activeFilter === filter
                ? "bg-foreground text-background border-foreground shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "bg-transparent border-muted/30 text-muted-foreground hover:border-muted hover:text-foreground hover:bg-muted/10"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* The Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredRundowns.map((rundown) => (
            <RundownCard key={rundown.id} rundown={rundown} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredRundowns.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-32 text-center border border-dashed border-muted/30 rounded-3xl bg-muted/5 flex flex-col items-center justify-center"
        >
          <div className="h-16 w-16 bg-muted/20 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-2">
            No results found
          </h3>
          <p className="font-mono text-xs text-muted-foreground">
            Try adjusting your search filters.
          </p>
        </motion.div>
      )}
    </section>
  );
}
