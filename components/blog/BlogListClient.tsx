// components/blog/BlogListClient.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import ArticleCard from "@/components/ui/ArticleCard";
import { BlogPost } from "@/lib/mdx";

export default function BlogListClient({
  initialArticles,
}: {
  initialArticles: BlogPost[];
}) {
  const [search, setSearch] = useState("");

  const filteredArticles = initialArticles.filter((post) => {
    const title = post.metadata.title || "";
    const excerpt = post.metadata.excerpt || "";
    const searchTerm = search.toLowerCase();

    return (
      title.toLowerCase().includes(searchTerm) ||
      excerpt.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-muted/30 pb-6 mb-12 gap-4">
        <h2 className="font-heading text-2xl font-bold flex items-center gap-3">
          Archive{" "}
          <span className="text-xs font-mono font-normal text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
            {filteredArticles.length} entries
          </span>
        </h2>

        {/* Styled Search Bar */}
        <div className="relative w-full md:w-72 group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-amber-400 transition-colors">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search intelligence log..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-muted/20 border border-muted/50 rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 focus:bg-background transition-all placeholder:text-muted-foreground/40"
          />
          <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-amber-400/50 opacity-0 group-focus-within:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <ArticleCard
              article={{
                slug: post.slug,
                title: post.metadata.title || "Untitled Report",
                excerpt: post.metadata.excerpt || "No summary available.",
                date: post.metadata.date || "Draft",
                readTime: post.metadata.readTime || "Unknown read",
                category: post.metadata.category || "Default",
              }}
            />
          </motion.div>
        ))}

        {filteredArticles.length === 0 && (
          <div className="col-span-full py-24 text-center border border-dashed border-muted/30 rounded-3xl bg-muted/5 flex flex-col items-center justify-center">
            <div className="h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-muted-foreground/50" />
            </div>
            <p className="font-heading font-bold text-muted-foreground">
              No archives found.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
