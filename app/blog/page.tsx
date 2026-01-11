// app/blog/page.tsx
import { getBlogPosts } from "@/lib/mdx";
import { Terminal, Rss, ArrowRight } from "lucide-react";
import BlogListClient from "@/components/blog/BlogListClient";

export default function BlogPage() {
  const posts = getBlogPosts();
  const featuredArticle =
    posts.find((post) => post.metadata.featured) || posts[0];
  const initialOtherArticles = posts.filter(
    (post) => post.slug !== featuredArticle.slug
  );

  return (
    <section className="w-full pb-24 pt-8">
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2 text-amber-500 font-mono text-xs mb-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
          <Terminal className="w-3 h-3" />
          <span>/var/log/thoughts</span>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">
            Intelligence Log.
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mt-4 leading-relaxed">
          Deep dives into frontend architecture, cybersecurity threats, and the
          evolving tech landscape. Less noise, more signal.
        </p>
      </div>

      {/* FEATURED ARTICLE HERO */}
      {featuredArticle && (
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold font-mono tracking-widest text-muted-foreground uppercase">
              Latest Intelligence
            </span>
          </div>

          <div className="group relative rounded-3xl border border-muted/50 bg-[#0A0A0A] overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
            {/* Text Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
              <div className="flex gap-3 mb-8">
                <span className="text-[10px] font-bold tracking-wider font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full uppercase">
                  {featuredArticle.metadata.category}
                </span>
                <span className="text-[10px] font-bold tracking-wider font-mono text-muted-foreground border border-muted/20 px-3 py-1 rounded-full uppercase">
                  {featuredArticle.metadata.readTime}
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-[1.1] group-hover:text-orange-100 transition-colors">
                {featuredArticle.metadata.title}
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed line-clamp-3">
                {featuredArticle.metadata.excerpt}
              </p>
              <a
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center text-base font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                Read Full Analysis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Visual / Abstract Art Side */}
            <div className="relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden">
              {/* Rich Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-red-500/10 to-background" />

              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-30 bg-[url('/grid-pattern.svg')] bg-center" />

              {/* Abstract Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 blur-[80px] opacity-20 animate-pulse" />
                  <Rss className="relative w-32 h-32 text-orange-500/20 group-hover:text-orange-500/40 group-hover:scale-110 transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Glass border between text and image on desktop */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      )}

      {/* SEARCH AND GRID */}
      <BlogListClient initialArticles={initialOtherArticles} />
    </section>
  );
}
