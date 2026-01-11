// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileQuestion, Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto"
      >
        
        {/* "Sticker" Icon */}
        <div className="mb-8 p-6 rounded-3xl bg-linear-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20 shadow-2xl shadow-rose-500/10 rotate-3">
           <FileQuestion className="w-16 h-16 text-rose-400" />
        </div>

        {/* 404 Glitch Text */}
        <h1 className="font-heading text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-foreground to-muted-foreground/20 mb-2">
          404
        </h1>
        
        <h2 className="font-heading text-2xl font-bold mb-4">
          Signal Lost in the Void.
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you are looking for has been moved, deleted, or perhaps never existed in this dimension.
        </p>

        {/* Fake Terminal Log */}
        <div className="w-full bg-[#0A0A0A] border border-muted/30 rounded-xl p-4 mb-10 text-left font-mono text-xs overflow-hidden shadow-inner">
           <div className="flex items-center gap-1.5 mb-3 border-b border-muted/20 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <span className="ml-2 text-muted-foreground/50">system_diagnostics</span>
           </div>
           <div className="space-y-1.5 text-muted-foreground">
              <p>+ initiating_search_protocol...</p>
              <p>- error: <span className="text-rose-400">path_not_found_exception</span></p>
              <p>- suggestion: <span className="text-emerald-400">return_to_base</span></p>
              <p className="animate-pulse">- _</p>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mb-10">
          <Link 
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all active:scale-95"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-muted/30 border border-muted/50 font-bold rounded-xl hover:bg-muted/50 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>

      </motion.div>
    </div>
  );
}