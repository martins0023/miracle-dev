// app/page.tsx
"use client"
import BentoCard from "@/components/ui/BentoCard";
import { ArrowUpRight, Code2, Cpu, Layers, ShieldCheck } from "lucide-react";
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
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-dim border border-cyber/20 text-cyber text-xs font-mono mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber"></span>
          </span>
          System Status: Active & Learning
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] font-sans"
        >
          Engineering secure <br /> <span className="bg-clip-text bg-linear-to-r from-foreground to-muted-foreground">digital experiences.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mt-6 max-w-xl font-sans"
        >
          I'm <span className="text-foreground font-semibold">Miracle Oladapo</span>. An exceptional Frontend Engineer bridging the gap between pixel-perfect user interfaces and resilient cybersecurity practices.
        </motion.p>
      </div>

      {/* The Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Card 1: Primary Credentials (Large) */}
        <BentoCard colSpan={2} delayIndex={1} className="flex justify-between">
           <div>
             <ShieldCheck className="w-8 h-8 text-cyber mb-4" />
             <h3 className="text-xl font-bold mb-2">Certified & Studying</h3>
             <p className="text-muted-foreground text-sm mb-6">
               AltSchool Africa Frontend Diploma holder. Currently pursuing Cybersecurity at Miva University.
             </p>
             <div className="flex gap-2 flex-wrap">
                <Badge>Frontend Certified</Badge>
                <Badge variant="cyber">Cybersec Student</Badge>
             </div>
           </div>
           {/* Decorative cyber pattern in background right */}
           <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03] bg-cyber-grid pointer-events-none" />
        </BentoCard>

        {/* Card 2: Current Focus/Status (Small) */}
        <BentoCard colSpan={1} delayIndex={2} className="bg-cyber-dim/30 border-cyber/20">
          <div className="h-full flex flex-col justify-between">
             <Cpu className="w-6 h-6 text-cyber" />
             <div>
              <p className="font-mono text-xs text-cyber mb-1">This month's focus_</p>
              <p className="text-lg font-bold">Next.js 14 Server Actions & Pen-testing labs.</p>
             </div>
          </div>
        </BentoCard>

        {/* Card 3: Link to Rundowns (Small) */}
        <BentoCard colSpan={1} delayIndex={3} className="group cursor-pointer relative">
             <Link href="/rundowns" className="absolute inset-0 z-20" aria-label="Go to rundowns"></Link>
             <div className="flex justify-between items-start h-full">
                 <Layers className="w-6 h-6 text-muted-foreground group-hover:text-cyber transition-colors" />
                 <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-cyber transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
             </div>
             <div className="mt-auto">
                 <h3 className="text-lg font-bold group-hover:text-cyber transition-colors">Rundowns</h3>
                 <p className="text-sm text-muted-foreground">Bite-sized technical insights and quick fixes.</p>
             </div>
        </BentoCard>

        {/* Card 4: Latest Article Snippet (Medium height) */}
        <BentoCard colSpan={2} delayIndex={4} className="md:row-span-2 h-fit flex flex-col justify-center relative">
           {/* Abstract code graphic */}
           <Code2 className="absolute -right-4 -top-4 w-24 h-24 text-muted/10 pointer-events-none" />
           
           <p className="font-mono text-xs text-muted-foreground mb-4">LATEST_ARTICLE :: 2023-10-27</p>
           <h3 className="text-2xl font-bold mb-4 line-clamp-2 hover:text-cyber transition-colors cursor-pointer">
            Securing React Applications: Beyond the basics of sanitization.
           </h3>
           <p className="text-muted-foreground mb-6 line-clamp-3">
            Exploring advanced techniques for preventing XSS in modern React frameworks, looking at how Server Components change the security landscape...
           </p>
            <Link href="/blog/securing-react" className="inline-flex items-center text-sm font-bold text-cyber hover:underline decoration-2 underline-offset-4">
              Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
        </BentoCard>

         {/* Card 5: The Stack (Medium) */}
         <BentoCard colSpan={2} delayIndex={5}>
            <h3 className="text-lg font-bold mb-6">The Core Stack</h3>
            <div className="grid grid-cols-4 gap-4">
              {/* Simple text representation for now, replace with icons later */}
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Linux', 'Wireshark', 'Git'].map(tech => (
                  <div key={tech} className="aspect-square rounded-lg border border-muted/40 flex items-center justify-center bg-muted/20 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-muted transition-all">
                    {tech}
                  </div>
              ))}
            </div>
         </BentoCard>
      </div>
    </section>
  );
}

// Simple internal Badge component for the grid items
function Badge({children, variant = "default"}: {children: React.ReactNode, variant?: "default" | "cyber"}) {
  return (
    <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", 
      variant === 'default' ? 'bg-muted/50 text-muted-foreground ring-muted/40' : '',
      variant === 'cyber' ? 'bg-cyber-dim/50 text-cyber ring-cyber/30 font-mono' : ''
    )}>
      {children}
    </span>
  )
}