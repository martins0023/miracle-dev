// components/blog/BlogListClient.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ArticleCard from "@/components/ui/ArticleCard";
import { BlogPost } from "@/lib/mdx";

export default function BlogListClient({ initialArticles }: { initialArticles: BlogPost[] }) {
  const [search, setSearch] = useState("");
  
  const filteredArticles = initialArticles.filter(post => 
    post.metadata.title.toLowerCase().includes(search.toLowerCase()) ||
    post.metadata.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-muted/30 pb-6 mb-10 gap-4">
         <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
           Archive <span className="text-sm font-mono font-normal text-muted-foreground">({filteredArticles.length} files)</span>
         </h2>
         <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search archives..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-background border border-muted rounded-md py-2 pl-9 pr-4 text-sm font-mono focus:outline-none focus:border-cyber focus:ring-1 focus:ring-cyber/20 transition-all"
            />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
             {/* We adapt the ArticleCard to accept the BlogPost shape */}
            <ArticleCard article={{
                slug: post.slug,
                title: post.metadata.title,
                excerpt: post.metadata.excerpt,
                date: post.metadata.date,
                readTime: post.metadata.readTime,
                category: post.metadata.category
            }} />
          </motion.div>
        ))}
        
        {filteredArticles.length === 0 && (
           <div className="col-span-full py-20 text-center text-muted-foreground font-mono">
              No archives found matching query.
           </div>
        )}
      </div>
    </>
  );
}