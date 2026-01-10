// app/blog/page.tsx
import { getBlogPosts } from "@/lib/mdx";
import ArticleCard from "@/components/ui/ArticleCard";
import { Terminal, Rss, Search } from "lucide-react";
import BlogListClient from "@/components/blog/BlogListClient"; // We will make a client wrapper for search

export default function BlogPage() {
  const posts = getBlogPosts();
  const featuredArticle = posts.find((post) => post.metadata.featured) || posts[0];
  const initialOtherArticles = posts.filter((post) => post.slug !== featuredArticle.slug);

  return (
    <section className="w-full pb-24 pt-8">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2 text-cyber font-mono text-sm">
           <Terminal className="w-4 h-4" />
           <span>/var/log/thoughts</span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
          Engineering <br />
          <span className="text-muted-foreground">Intelligence Log.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mt-2">
          Long-form writing on frontend architecture, cybersecurity threats, and the evolving tech landscape in Africa.
        </p>
      </div>

      {/* FEATURED ARTICLE HERO */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyber animate-pulse" />
            <span className="text-xs font-bold font-mono tracking-widest text-muted-foreground uppercase">Latest Intelligence</span>
        </div>
        
        <div className="group relative rounded-2xl border border-muted bg-[#0F0F0F] overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-cyber/40 transition-colors duration-500">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex gap-3 mb-6">
                  <span className="text-xs font-mono text-cyber border border-cyber/20 bg-cyber/5 px-2 py-1 rounded">{featuredArticle.metadata.category}</span>
                  <span className="text-xs font-mono text-muted-foreground py-1">{featuredArticle.metadata.readTime}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight group-hover:text-cyber transition-colors">
                {featuredArticle.metadata.title}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed line-clamp-3">
                {featuredArticle.metadata.excerpt}
              </p>
              <a href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center text-foreground font-bold hover:text-cyber transition-colors">
                  Read Full Analysis 
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

            <div className="relative bg-muted/10 h-64 lg:h-auto order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-muted/40 group-hover:border-cyber/20 transition-colors">
              <div className="absolute inset-0 bg-cyber-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                  <Rss className="w-24 h-24 text-muted-foreground/10 group-hover:text-cyber/10 transition-colors duration-500" />
              </div>
            </div>
        </div>
      </div>

      {/* SEARCH AND GRID (Client Side Logic) */}
      <BlogListClient initialArticles={initialOtherArticles} />

    </section>
  );
}