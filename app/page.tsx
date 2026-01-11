// app/page.tsx
"use client";
import BentoCard from "@/components/ui/BentoCard";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Atom,
  Blocks,
  FileCode,
  Palette,
  Server,
  Terminal,
  Activity,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="w-full pb-20">
      {/* Hero Text */}
      <div className="flex flex-col items-start max-w-3xl mb-16 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Status: Online & Available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] font-heading"
        >
          Engineering secure <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-500">
            digital experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mt-6 max-w-xl font-sans leading-relaxed"
        >
          I'm{" "}
          <span className="text-foreground font-semibold">Miracle Oladapo</span>
          . An exceptional Frontend Engineer bridging the gap between
          pixel-perfect user interfaces and resilient cybersecurity practices.
        </motion.p>
      </div>

      {/* The Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* Card 1: Certified (Green/Teal Gradient - Growth & Success) */}
        <BentoCard
          colSpan={2}
          delayIndex={1}
          className="flex justify-between relative overflow-hidden bg-linear-to-br from-emerald-950/30 to-background border-emerald-500/20 hover:border-emerald-500/40"
        >
          <div className="relative z-10">
            <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-emerald-50">
              Certified & Studying
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              AltSchool Africa Frontend Diploma holder. Currently pursuing
              Cybersecurity at Miva University.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="success">Frontend Certified</Badge>
              <Badge variant="blue">Cybersec Student</Badge>
            </div>
          </div>
          {/* Decorative blurred blob */}
          <div className="absolute right-0 top-0 h-40 w-40 bg-emerald-500/10 blur-[50px] pointer-events-none" />
        </BentoCard>

        {/* Card 2: Focus (Blue/Cyan Gradient - Tech & Active) */}
        <BentoCard
          colSpan={1}
          delayIndex={2}
          className="bg-linear-to-br from-blue-950/30 to-background border-blue-500/20 hover:border-blue-500/40"
        >
          <div className="h-full flex flex-col justify-between relative z-10">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-blue-400 mb-2 uppercase tracking-wider">
                Current Focus
              </p>
              <p className="text-lg font-bold leading-tight">
                Next.js 14 Server Actions & Pen-testing labs.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Rundowns (Purple Gradient - Insight & Magic) */}
        <BentoCard
          colSpan={1}
          delayIndex={3}
          className="group cursor-pointer relative bg-linear-to-br from-purple-950/30 to-background border-purple-500/20 hover:border-purple-500/40"
        >
          <Link
            href="/rundowns"
            className="absolute inset-0 z-20"
            aria-label="Go to rundowns"
          ></Link>
          <div className="flex justify-between items-start h-full relative z-10">
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-purple-400 transition-colors" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-purple-400/50 group-hover:text-purple-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">
              Rundowns
            </h3>
            <p className="text-sm text-muted-foreground">
              Bite-sized technical insights.
            </p>
          </div>
        </BentoCard>

        {/* Card 4: Latest Article (Amber/Orange Gradient - Warmth & Reading) */}
        <BentoCard
          colSpan={2}
          delayIndex={4}
          className="md:row-span-2 h-fit flex flex-col justify-center relative bg-linear-to-br from-amber-950/20 to-background border-amber-500/20 hover:border-amber-500/40"
        >
          {/* Abstract code graphic */}
          <Code2 className="absolute -right-4 -top-4 w-24 h-24 text-amber-500/5 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              <p className="font-mono text-xs text-amber-500">LATEST_ARTICLE</p>
            </div>

            <h3 className="text-2xl font-bold mb-4 line-clamp-2 hover:text-amber-400 transition-colors cursor-pointer">
              Securing React Applications: Beyond the basics of sanitization.
            </h3>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              Exploring advanced techniques for preventing XSS in modern React
              frameworks, looking at how Server Components change the security
              landscape...
            </p>
            <Link
              href="/blog/securing-react"
              className="inline-flex items-center text-sm font-bold text-amber-500 hover:text-amber-400 hover:underline decoration-2 underline-offset-4 transition-colors"
            >
              Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </BentoCard>

        {/* Card 5: The Stack (Neutral/Gray - Foundation) */}
        <BentoCard
          colSpan={2}
          delayIndex={5}
          className="bg-linear-to-br from-neutral-900 to-background border-muted/40"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" /> The
              Core Stack
            </h3>
            {/* A subtle version tag for the 'tech' feel */}
            <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono hidden sm:block">
              Toolkit v2.0
            </span>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-4 gap-3">
            {[
              {
                name: "React",
                icon: Atom,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                desc: "UI Library",
              },
              {
                name: "Next.js",
                icon: Blocks,
                color: "text-white",
                bg: "bg-white/10",
                desc: "Framework",
              },
              {
                name: "TypeScript",
                icon: FileCode,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                desc: "Logic",
              },
              {
                name: "Tailwind",
                icon: Palette,
                color: "text-cyan-400",
                bg: "bg-cyan-400/10",
                desc: "Design",
              },
              {
                name: "Node.js",
                icon: Server,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                desc: "Backend",
              },
              {
                name: "Linux",
                icon: Terminal,
                color: "text-yellow-500",
                bg: "bg-yellow-500/10",
                desc: "System",
              },
              {
                name: "Wireshark",
                icon: Activity,
                color: "text-red-500",
                bg: "bg-red-500/10",
                desc: "Analysis",
              },
              {
                name: "Git",
                icon: GitBranch,
                color: "text-orange-500",
                bg: "bg-orange-500/10",
                desc: "Version",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`group relative flex flex-col items-center justify-center aspect-square rounded-2xl border border-white/5 ${tech.bg} hover:border-white/10 hover:scale-105 transition-all duration-300 cursor-default`}
              >
                {/* The Tech Icon */}
                <tech.icon
                  className={`w-6 h-6 mb-1.5 ${tech.color} transition-transform group-hover:-translate-y-1 duration-300`}
                />

                {/* Tech Name (Visible by default) */}
                <span className="text-[10px] font-bold text-foreground/80 group-hover:opacity-0 transition-opacity duration-300">
                  {tech.name}
                </span>

                {/* Description (Visible on Hover for non-techies) */}
                <span className="absolute bottom-2 text-[9px] font-mono font-medium text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {tech.desc}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}

// Updated Badge component with colorful variants
function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "blue" | "cyber";
}) {
  const variants = {
    default: "bg-muted/50 text-muted-foreground ring-muted/40",
    success: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    blue: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    cyber: "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}
