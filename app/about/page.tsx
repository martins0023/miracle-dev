// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Terminal, Shield, Code2, Cpu, Globe } from "lucide-react";
import { TimelineItem } from "@/components/ui/Timeline";
import Image from "next/image"; // Ensure you have an image in public/profile.jpg or remove the Image component

// Data: Tech Stack categorized
const techStack = [
  { category: "Frontend Core", tools: ["React", "Next.js 14", "TypeScript", "Tailwind CSS"] },
  { category: "State & Data", tools: ["Redux Toolkit", "TanStack Query", "Zustand", "GraphQL"] },
  { category: "Security & Backend", tools: ["Node.js", "OWASP ZAP", "Burp Suite", "Linux Admin"] },
  { category: "Design & UX", tools: ["Figma", "Framer Motion", "Adobe XD", "UI Systems"] },
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
            className="flex items-center gap-2 text-cyber font-mono text-sm mb-2"
          >
            <Terminal className="w-4 h-4" />
            <span>whoami</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold leading-[1.1]"
          >
            Builder by trade. <br />
            <span className="text-muted-foreground">Protector by design.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg text-muted-foreground font-sans"
          >
            <p>
              I am <strong>Miracle Oladapo</strong>, a software engineer who
              believes that the most beautiful interfaces are the ones that are
              safe to use.
            </p>
            <p>
              My journey began in Nigeria, where I developed a fascination for
              how things work—and how they break. This curiosity led me to the
              UK, where I refined my craft in{" "}
              <strong>Business & Computing</strong>, and later to{" "}
              <strong>AltSchool Africa</strong>, where I earned my stripes in
              rigorous Frontend Engineering.
            </p>
            <p>
              Today, I don't just build websites; I architect digital
              ecosystems. While my hands write <strong>React & Next.js</strong>,
              my mind studies <strong>Cybersecurity</strong> at Miva University,
              ensuring that every pixel I push is fortified against modern
              threats.
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
          <div className="absolute -inset-1 bg-linear-to-b from-cyber/20 to-transparent rounded-2xl blur-lg opacity-50" />

          <div className="relative bg-[#0F0F0F] border border-muted/60 rounded-xl overflow-hidden shadow-2xl">
            {/* ID Header */}
            <div className="h-32 bg-muted/10 border-b border-muted/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-cyber-grid" />
              <div className="absolute top-4 right-4 font-mono text-xs text-cyber border border-cyber/30 px-2 py-0.5 rounded">
                STATUS: ACTIVE
              </div>
            </div>

            {/* Profile Content */}
            <div className="px-6 pb-6 relative">
              {/* Avatar Placeholder */}
              <div className="-mt-16 mb-4 h-32 w-32 rounded-full border-4 border-[#0F0F0F] bg-muted overflow-hidden relative group">
                {/* Replace this with an actual Image component when you have the file */}
                <div className="absolute inset-0 bg-linear-to-tr from-muted to-muted/50 flex items-center justify-center text-muted-foreground">
                  <Image
                    src="/profile.jpg"
                    alt="Miracle Oladapo"
                    width={128}
                    height={128}
                    className="object-cover h-32 w-32"
                  />
                </div>
                {/* Scanline effect on avatar */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyber/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
              </div>

              <h2 className="font-heading text-2xl font-bold font-sans">
                Miracle Oladapo
              </h2>
              <p className="text-sm text-muted-foreground mb-4 font-sans">
                Frontend Engineer • Security Analyst
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-sans">
                <div className="p-3 bg-muted/20 rounded-lg border border-muted/30">
                  <span className="block text-xs font-mono text-muted-foreground">
                    LOCATION
                  </span>
                  <span className="text-sm font-medium">Lagos / UK</span>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg border border-muted/30">
                  <span className="block text-xs font-mono text-muted-foreground">
                    EXP. LEVEL
                  </span>
                  <span className="text-sm font-medium">Mid-Level</span>
                </div>
              </div>

              <div className="space-y-2 font-sans">
                <div className="flex justify-between text-xs font-mono">
                  <span>Frontend Skills</span>
                  <span className="text-cyber">92%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-cyber w-[92%]" />
                </div>

                <div className="flex justify-between text-xs font-mono pt-2">
                  <span>Cybersec Knowledge</span>
                  <span className="text-cyber">65%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-cyber w-[65%]" />
                </div>

                <div className="flex justify-between text-xs font-mono pt-2">
                  <span>Backend Skills</span>
                  <span className="text-cyber">85                                                                                          %</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-cyber w-[72%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: THE MATRIX (Tech Stack) */}
      <div className="mb-32 font-sans">
        <h2 className="font-heading text-3xl font-bold mb-10 flex items-center gap-3">
          <Cpu className="text-cyber" /> The Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, idx) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-muted/10 border border-muted/30 hover:border-cyber/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-foreground/90">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2 text-sm text-muted-foreground font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber/50" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 3: SYSTEM LOG (Timeline) */}
      <div className="max-w-3xl mx-auto font-mono">
        <h2 className="font-heading text-3xl font-bold mb-12 flex items-center gap-3">
          <Shield className="text-cyber" /> System Log (Experience)
        </h2>

        <div className="relative">
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