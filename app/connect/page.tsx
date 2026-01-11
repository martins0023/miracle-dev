// app/connect/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Copy,
  Check,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConnectPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [copied, setCopied] = useState(false);

  // Email Copy Function
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@miracleoladapo.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dummy Form Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <section className="w-full pb-24 pt-10">
      {/* HEADER */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit font-mono text-xs mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Status: Open to Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight"
        >
          Let's start a <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
            conversation.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed"
        >
          Interested in working together? Whether it's a frontend masterpiece, a
          security audit, or just a chat about the future of tech in Africa —
          I'm all ears.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* LEFT COLUMN: Socials & Direct Contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-linear-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Mail className="w-24 h-24 text-blue-500/10 rotate-12" />
            </div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-2">
              Primary Channel
            </h3>
            <p className="text-2xl font-heading font-bold mb-6">
              hello@miracleoladapo.dev
            </p>

            <div className="flex gap-3">
              <a
                href="mailto:hello@miracleoladapo.dev"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20"
              >
                <Send className="w-4 h-4" /> Send Email
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-5 py-2.5 bg-background border border-blue-500/30 hover:bg-blue-500/10 text-foreground font-bold rounded-xl transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 gap-4">
            <SocialCard
              href="https://github.com"
              icon={Github}
              label="GitHub"
              sub="View Code"
              color="hover:border-white/40 hover:bg-white/5"
            />
            <SocialCard
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn"
              sub="Connect"
              color="hover:border-blue-400/40 hover:bg-blue-400/5 text-blue-400"
            />
            <SocialCard
              href="https://twitter.com"
              icon={Twitter}
              label="Twitter / X"
              sub="Follow"
              color="hover:border-sky-400/40 hover:bg-sky-400/5 text-sky-400"
            />
            <SocialCard
              href="#"
              icon={MessageSquare}
              label="Discord"
              sub="Chat"
              color="hover:border-indigo-400/40 hover:bg-indigo-400/5 text-indigo-400"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-muted/5 border border-muted/40 rounded-3xl p-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

            {formState === "success" ? (
              <div className="h-100 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted-foreground">
                  I'll get back to you via email shortly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-sm font-bold text-blue-400 hover:underline"
                >
                  Send another?
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-muted focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-muted focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background/50 border border-muted focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  {formState === "submitting" ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Social Card Component
function SocialCard({
  href,
  icon: Icon,
  label,
  sub,
  color,
}: {
  href: string;
  icon: any;
  label: string;
  sub: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between p-4 rounded-2xl border border-muted/30 bg-muted/5 transition-all duration-300",
        color
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-background/50 rounded-lg group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-bold leading-none">{label}</p>
          <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
            {sub}
          </p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </a>
  );
}
