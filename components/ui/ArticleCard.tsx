// components/ui/ArticleCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface ArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const CATEGORY_STYLES: Record<string, string> = {
  "Security": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:border-emerald-400/50",
  "Engineering": "text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:border-blue-400/50",
  "AI / UX": "text-purple-400 bg-purple-400/10 border-purple-400/20 group-hover:border-purple-400/50",
  "Career": "text-amber-400 bg-amber-400/10 border-amber-400/20 group-hover:border-amber-400/50",
  "Default": "text-muted-foreground bg-muted/10 border-muted/20 group-hover:border-foreground/50"
};

export default function ArticleCard({ article }: { article: ArticleProps }) {
  // Fallback to default if category not found
  const categoryStyle = CATEGORY_STYLES[article.category] || CATEGORY_STYLES["Default"];
  const accentColor = categoryStyle.split(" ")[0]; // Extract just the text color class for hover effects

  return (
    <Link href={`/blog/${article.slug}`} className="group block w-full h-full">
      <article className="relative flex flex-col justify-between h-full p-6 rounded-2xl border border-muted/40 bg-linear-to-b from-muted/5 to-transparent hover:bg-muted/10 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
        
        {/* Top Meta: Category & Date */}
        <div className="flex items-center justify-between mb-5 text-xs font-mono">
          <span className={cn("px-2.5 py-1 rounded-md border font-bold uppercase tracking-wider transition-colors", categoryStyle)}>
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className={cn("font-heading text-xl md:text-2xl font-bold mb-3 leading-tight transition-colors group-hover:text-foreground/90", accentColor.replace("text-", "group-hover:text-"))}>
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-muted-foreground/80">
            {article.excerpt}
          </p>
        </div>

        {/* Bottom: Meta & Link */}
        <div className="mt-auto pt-5 border-t border-muted/10 flex items-center justify-between text-xs text-muted-foreground font-mono">
           <div className="flex items-center gap-4">
             <span className="flex items-center gap-1.5">
               <Calendar className="w-3 h-3" /> {article.date}
             </span>
             <span className="flex items-center gap-1.5">
               <Clock className="w-3 h-3" /> {article.readTime}
             </span>
           </div>

           <div className={cn("flex items-center font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300", accentColor)}>
              Read <ArrowRight className="w-3 h-3 ml-1" />
           </div>
        </div>

        {/* Decorative Top Gradient Line */}
        <div className={cn("absolute top-0 left-6 right-6 h-px opacity-20", categoryStyle.split(" ")[0].replace("text-", "bg-"))} />
      </article>
    </Link>
  );
}