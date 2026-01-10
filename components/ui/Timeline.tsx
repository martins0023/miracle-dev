// components/ui/Timeline.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  role: string;
  description: string;
  icon?: LucideIcon;
  isLast?: boolean;
  delay?: number;
}

export function TimelineItem({ year, title, role, description, icon: Icon, isLast, delay = 0 }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative pl-8 sm:pl-12 pb-12 group"
    >
      {/* The Vertical Line (Circuit Trace) */}
      {!isLast && (
        <div 
          className="absolute left-2.75 sm:left-4.75 top-2 h-full w-0.5 bg-muted group-hover:bg-cyber/50 transition-colors duration-500 origin-top" 
        />
      )}
      
      {/* The Node (Dot) */}
      <div className="absolute left-0 sm:left-2 top-2 h-6 w-6 rounded-full border border-muted bg-background flex items-center justify-center group-hover:border-cyber group-hover:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-500">
        <div className="h-2 w-2 rounded-full bg-muted-foreground group-hover:bg-cyber transition-colors duration-500" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6 mb-2">
        <span className="font-mono text-sm text-cyber font-bold tracking-wider">{year}</span>
        <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-muted/30 px-2 py-1 text-sm font-medium text-muted-foreground">
        {Icon && <Icon className="h-3 w-3" />}
        {role}
      </div>
      
      <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}