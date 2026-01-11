// app/blog/[slug]/page.tsx
import { getPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx-components";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Terminal, Share2 } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 1. Helper for Category Colors (Consistent with Blog List)
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Security": return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "Engineering": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    case "AI / UX": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
    case "Career": return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    default: return "text-muted-foreground bg-muted/10 border-muted/20";
  }
};

// 2. Fix: Type params as a Promise
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // 3. Fix: Await params
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const categoryStyle = getCategoryColor(post.metadata.category);
  const accentColor = categoryStyle.split(" ")[0]; // Extract text color for gradients

  return (
    <article className="w-full max-w-4xl mx-auto pt-8 pb-24">
      
      {/* Navigation Bar */}
      <div className="flex items-center justify-between mb-12">
        <Link 
          href="/blog" 
          className="group inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <div className="p-2 rounded-full bg-muted/10 group-hover:bg-muted/20 mr-3 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Intelligence Log
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative mb-16">
        {/* Background Glow */}
        <div className={cn("absolute -top-20 -left-20 w-64 h-64 blur-[100px] opacity-20 pointer-events-none rounded-full", accentColor.replace("text-", "bg-"))} />
        
        <div className="relative z-10 border-b border-muted/20 pb-12">
          {/* Meta Top */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
             <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border", categoryStyle)}>
               {post.metadata.category}
             </span>
             <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
             <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
               <Calendar className="w-3.5 h-3.5" /> {post.metadata.date}
             </span>
             <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
             <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
               <Clock className="w-3.5 h-3.5" /> {post.metadata.readTime}
             </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-foreground">
            {post.metadata.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light border-l-4 border-muted pl-6 italic">
            {post.metadata.excerpt}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "prose prose-invert prose-lg max-w-none",
        // Customizing prose styles to match theme
        "prose-headings:font-heading prose-headings:font-bold",
        "prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline",
        "prose-pre:border prose-pre:border-muted/30 prose-pre:bg-[#0A0A0A]",
        "prose-blockquote:border-l-amber-400 prose-blockquote:bg-amber-400/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
      )}>
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: "github-dark", keepBackground: false }],
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ],
            },
          }}
        />
      </div>

      {/* Author / Footer Block */}
      <div className="mt-24 pt-12 border-t border-muted/30">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-muted/5 rounded-3xl p-8 border border-muted/20">
          
          <div className="relative">
             <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-emerald-500 blur-lg opacity-40 rounded-full" />
             <div className="relative h-20 w-20 rounded-full bg-background border-2 border-muted overflow-hidden flex items-center justify-center">
               <Terminal className="w-8 h-8 text-muted-foreground" />
             </div>
          </div>

          <div className="flex-1 text-center md:text-left">
             <h3 className="text-xl font-heading font-bold mb-2">Written by Miracle Oladapo</h3>
             <p className="text-muted-foreground mb-6 max-w-lg">
               Frontend Engineer & Security Analyst. Building digital ecosystems that are beautiful, performant, and secure.
             </p>
             <Link 
               href="/connect" 
               className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
             >
               Start a conversation <Share2 className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </div>

    </article>
  );
}