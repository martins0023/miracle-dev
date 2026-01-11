// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Terminal,
  Shield,
  Code2,
  Cpu,
  Palette,
  Database,
  Globe,
  Lock,
} from "lucide-react";
import { TimelineItem } from "@/components/ui/Timeline";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Enhanced Data Structure with Icons and Color Themes
const TECH_CATEGORIES = [
  {
    title: "Frontend Core",
    icon: Code2,
    theme: "blue",
    description: "Building Interfaces",
    tools: ["React", "Next.js 14", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "State & Data",
    icon: Database,
    theme: "violet",
    description: "Managing Logic",
    tools: ["Redux Toolkit", "TanStack Query", "Zustand", "GraphQL"],
  },
  {
    title: "Security & Backend",
    icon: Lock,
    theme: "emerald",
    description: "Protecting Systems",
    tools: ["Node.js", "OWASP ZAP", "Burp Suite", "Linux Admin"],
  },
  {
    title: "Design & UX",
    icon: Palette,
    theme: "rose",
    description: "Crafting Experiences",
    tools: ["Figma", "Framer Motion", "Adobe XD", "UI Systems"],
  },
];

export default function AboutPage() {
  return (
    <section className="w-full pb-24 pt-10">
      {/* SECTION 1: HERO & DIGITAL ID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit font-mono text-xs mb-2"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>whoami</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold leading-[1.1]"
          >
            Builder by trade. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
              Protector by design.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg text-muted-foreground font-sans leading-relaxed"
          >
            <p>
              I am <strong className="text-foreground">Miracle Oladapo</strong>,
              a software engineer who believes that the most beautiful
              interfaces are the ones that are safe to use.
            </p>
            <p>
              My journey began in Nigeria, where I developed a fascination for
              how things work—and how they break. This curiosity led me to the
              UK, where I refined my craft in{" "}
              <strong className="text-foreground">Business & Computing</strong>,
              and later to{" "}
              <strong className="text-foreground">AltSchool Africa</strong>,
              where I earned my stripes in rigorous Frontend Engineering.
            </p>
            <p>
              Today, I don't just build websites; I architect digital
              ecosystems. While my hands write{" "}
              <span className="text-cyan-400 font-medium">React & Next.js</span>
              , my mind studies{" "}
              <span className="text-emerald-400 font-medium">
                Cybersecurity
              </span>{" "}
              at Miva University, ensuring that every pixel I push is fortified
              against modern threats.
            </p>
          </motion.div>
        </div>

        {/* Right Column: The "Digital ID" Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="lg:col-span-5 relative"
        >
          {/* Cyber Decorative Elements */}
          <div className="absolute -inset-1 bg-linear-to-br from-cyan-500/20 via-emerald-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-40" />

          <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* ID Header */}
            <div className="h-32 bg-linear-to-r from-cyan-900/40 to-emerald-900/40 relative overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 opacity-30 bg-[url('/grid-pattern.svg')] bg-center" />
              <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-1 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                STATUS: ONLINE
              </div>
            </div>

            {/* Profile Content */}
            <div className="px-6 pb-6 relative">
              {/* Avatar Placeholder */}
              <div className="-mt-16 mb-4 h-32 w-32 rounded-3xl rotate-3 border-4 border-background bg-muted overflow-hidden relative group shadow-xl">
                {/* Fallback / Image */}
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-100 to-emerald-100 flex items-center justify-center text-emerald-900">
                  <Image
                    src="/profile.jpg"
                    alt="Miracle Oladapo"
                    width={128}
                    height={128}
                    className="object-cover h-full w-full opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold font-sans">
                Miracle Oladapo
              </h2>
              <p className="text-sm text-muted-foreground mb-6 font-sans flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Frontend
                Engineer
                <span className="text-muted-foreground/30">|</span>
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Security
                Analyst
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-sans">
                <div className="p-3 bg-muted/30 rounded-xl border border-white/5 hover:bg-muted/50 transition-colors">
                  <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    Based In
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" /> Lagos / UK
                  </div>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl border border-white/5 hover:bg-muted/50 transition-colors">
                  <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    Level
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Mid-Level
                  </div>
                </div>
              </div>

              {/* Colorful Skill Bars */}
              <div className="space-y-4 font-sans">
                <SkillBar
                  label="Frontend Architecture"
                  percent={92}
                  color="bg-cyan-400"
                />
                <SkillBar
                  label="Cybersecurity Ops"
                  percent={65}
                  color="bg-emerald-400"
                />
                <SkillBar
                  label="Backend Logic"
                  percent={85}
                  color="bg-violet-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: THE MATRIX (Tech Stack - Visual & Colorful) */}
      <div className="mb-32 font-sans">
        <h2 className="font-heading text-3xl font-bold mb-10 flex items-center gap-3">
          <Cpu className="text-cyan-400" /> The Tech Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((stack, idx) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
                stack.theme === "blue" &&
                  "bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
                stack.theme === "violet" &&
                  "bg-violet-500/5 border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
                stack.theme === "emerald" &&
                  "bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
                stack.theme === "rose" &&
                  "bg-rose-500/5 border-rose-500/20 hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "p-2.5 rounded-lg",
                    stack.theme === "blue" && "bg-blue-500/10 text-blue-400",
                    stack.theme === "violet" &&
                      "bg-violet-500/10 text-violet-400",
                    stack.theme === "emerald" &&
                      "bg-emerald-500/10 text-emerald-400",
                    stack.theme === "rose" && "bg-rose-500/10 text-rose-400"
                  )}
                >
                  <stack.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {stack.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold opacity-70">
                    {stack.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-background border border-white/5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 3: SYSTEM LOG (Timeline - Styled) */}
      <div className="max-w-3xl mx-auto font-mono">
        <h2 className="font-heading text-3xl font-bold mb-12 flex items-center gap-3">
          <Shield className="text-emerald-400" /> System Log (Experience)
        </h2>

        <div className="relative pl-4 border-l border-muted/30">
          <TimelineItem
            year="PRESENT"
            title="Cybersecurity Studies"
            role="Undergraduate"
            description="Deepening technical knowledge in network security, cryptography, and ethical hacking to complement frontend expertise."
            icon={GraduationCap}
          />

          <TimelineItem
            year="2024"
            title="Telehealth Platform Project"
            role="Lead Frontend Architect"
            description="Architected the user interface for 'doctorkays.com', focusing on accessibility, patient data privacy (HIPAA compliant UI patterns), and real-time video consultation integration."
            icon={Code2}
            delay={0.2}
          />

          <TimelineItem
            year="2023"
            title="AltSchool Africa"
            role="Diploma in Frontend Engineering"
            description="Intensive 12-month program covering advanced JavaScript, React architecture, and web performance. Graduated with distinction."
            icon={GraduationCap}
            delay={0.3}
          />

          <TimelineItem
            year="2023"
            title="Freelance Developer"
            role="Full Stack Solutions"
            description="Delivered web solutions for clients in Nigeria and the UK, including a bespoke inventory system and various marketing landing pages."
            icon={Briefcase}
            isLast={true}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

// Sub-component for the ID Card Skill Bars
function SkillBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5 text-muted-foreground">
        <span>{label}</span>
        <span className="text-foreground">{percent}%</span>
      </div>
      <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  );
}
