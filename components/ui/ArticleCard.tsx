// components/ui/ArticleCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface ArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export default function ArticleCard({ article }: { article: ArticleProps }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block w-full">
      <article className="relative flex flex-col justify-between h-full p-6 rounded-xl border border-muted/40 bg-muted/5 hover:bg-muted/10 hover:border-cyber/30 transition-all duration-300">
        
        {/* Top Meta: Category & Date */}
        <div className="flex items-center justify-between mb-4 text-xs font-mono text-muted-foreground">
          <span className="text-cyber border border-cyber/20 bg-cyber/5 px-2 py-0.5 rounded uppercase tracking-wider">
            {article.category}
          </span>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1.5">
               <Calendar className="w-3 h-3" /> {article.date}
             </span>
             <span className="flex items-center gap-1.5">
               <Clock className="w-3 h-3" /> {article.readTime}
             </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-cyber transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Bottom: Read More Link */}
        <div className="mt-6 flex items-center text-sm font-bold text-foreground group-hover:text-cyber transition-colors">
          Read Report <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Decorative Corner (Cyber aesthetic) */}
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 border-t border-r border-cyber"></div>
        </div>
      </article>
    </Link>
  );
}