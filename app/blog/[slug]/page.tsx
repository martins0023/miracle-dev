// app/blog/[slug]/page.tsx
import { getPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx-components";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Terminal } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-3xl mx-auto pt-8 pb-24">
      
      {/* Back Link */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-cyber transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Intelligence Log
      </Link>

      {/* Header */}
      <div className="mb-10 pb-10 border-b border-muted/30">
        <div className="flex items-center gap-3 mb-6">
           <span className="font-mono text-xs text-cyber border border-cyber/20 bg-cyber/5 px-2 py-0.5 rounded uppercase">
             {post.metadata.category}
           </span>
           <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
             <Calendar className="w-3 h-3" /> {post.metadata.date}
           </span>
           <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
             <Clock className="w-3 h-3" /> {post.metadata.readTime}
           </span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
          {post.metadata.title}
        </h1>
        
        <div className="text-xl text-muted-foreground leading-relaxed">
           {post.metadata.excerpt}
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: "github-dark", keepBackground: false }], 
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }]
              ],
            },
          }}
        />
      </div>

      {/* Footer / Author Block */}
      <div className="mt-20 pt-10 border-t border-muted/30 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-muted overflow-hidden flex items-center justify-center border border-muted-foreground/20">
           <Terminal className="w-6 h-6 text-muted-foreground" />
        </div>
        <div>
           <p className="font-bold text-foreground">Written by Miracle Oladapo</p>
           <p className="text-sm text-muted-foreground">Frontend Engineer & Security Analyst</p>
        </div>
      </div>
    </article>
  );
}