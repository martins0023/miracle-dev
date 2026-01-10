// app/rundowns/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, Filter } from "lucide-react";
import RundownCard, { RundownProps } from "@/components/ui/RundownCard";
import { cn } from "@/lib/utils";

// --- DUMMY DATA (Based on User Context) ---
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
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
}`
  },
  {
    id: "002",
    type: "tip",
    title: "Why you should avoid 'dangerouslySetInnerHTML'",
    date: "2024-01-10",
    tags: ["react", "security"],
    content: "Even if you sanitize input, using this prop opens up XSS vectors if the sanitizer misses a specific HTML5 edge case. Always prefer React's default escaping or use a dedicated library like 'dompurify' if absolutely necessary.",
  },
  {
    id: "003",
    type: "resource",
    title: "The best RAG Implementation Guide",
    date: "2023-12-28",
    tags: ["ai", "rag"],
    link: "https://python.langchain.com/docs/use_cases/question_answering/",
    content: "A fantastic deep dive into Retrieval-Augmented Generation using LangChain. It explains how to bridge your custom data with LLMs efficiently.",
  },
  {
    id: "004",
    type: "snippet",
    title: "Tailwind Grid Masonry Hack",
    date: "2023-11-20",
    tags: ["css", "ui"],
    content: `/* The easy way without JS */
.grid-masonry {
  columns: 3 200px;
  gap: 1rem;
}
.grid-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}`
  },
  {
    id: "005",
    type: "tip",
    title: "Handling JWTs on the Client",
    date: "2023-10-05",
    tags: ["auth", "security"],
    content: "Never store JWTs in localStorage. It is accessible by any JS code running on your page (XSS). Store them in httpOnly cookies which are automatically sent with requests but inaccessible to client-side scripts.",
  }
];

const FILTERS = ["All", "Security", "Next.js", "AI", "UI/UX"];

export default function RundownsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredRundowns = RUNDOWNS_DATA.filter((item) => {
    const matchesFilter = activeFilter === "All" 
      ? true 
      : item.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()) || 
        (activeFilter === "Next.js" && item.tags.includes("nextjs")) ||
        (activeFilter === "UI/UX" && (item.tags.includes("ui") || item.tags.includes("css")))
      );
    
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="w-full pb-24 pt-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-cyber font-mono text-sm mb-2">
            <Terminal className="w-4 h-4" />
            <span>/var/www/rundowns</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Knowledge Vault</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">
            A curated collection of code snippets, security patches, and architectural decisions I've made in the field.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto min-w-75">
           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
           </div>
           <input 
             type="text"
             placeholder="grep 'search_term'..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full bg-muted/10 border border-muted focus:border-cyber/50 focus:bg-muted/20 rounded-lg py-2 pl-10 pr-4 text-sm font-mono focus:outline-none transition-all placeholder:text-muted-foreground/50"
           />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
         <Filter className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
         {FILTERS.map((filter) => (
           <button
             key={filter}
             onClick={() => setActiveFilter(filter)}
             className={cn(
               "px-4 py-1.5 rounded-full text-xs font-mono border transition-all whitespace-nowrap",
               activeFilter === filter 
                 ? "bg-cyber/10 border-cyber text-cyber" 
                 : "bg-transparent border-muted/40 text-muted-foreground hover:border-muted hover:text-foreground"
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
        <div className="w-full py-20 text-center border border-dashed border-muted/30 rounded-xl">
          <p className="font-mono text-muted-foreground">No results found matching query.</p>
        </div>
      )}

    </section>
  );
}