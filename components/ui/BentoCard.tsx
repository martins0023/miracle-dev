// components/ui/BentoCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: number; // For responsiveness across grid columns
  delayIndex?: number; // For staggered animation
}

export default function BentoCard({ children, className, colSpan = 1, delayIndex = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayIndex * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative font-sans overflow-hidden rounded-2xl border border-muted/40 bg-muted/10 p-6 md:p-8 hover:border-cyber/50 transition-colors duration-500",
        // Responsive column spanning
        colSpan === 1 && "col-span-1",
        colSpan === 2 && "col-span-1 md:col-span-2",
        colSpan === 3 && "col-span-1 md:col-span-3",
        className
      )}
    >
      {/* Cyber Hover Gradient effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
           style={{ background: "radial-gradient(600px circle at var(--mouse-x, center) var(--mouse-y, center), rgba(0, 229, 255, 0.06), transparent 40%)" }}
      ></div>

      <div className="relative z-10 h-full flex flex-col">
       {children}
      </div>
    </motion.div>
  );
}