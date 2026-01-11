// components/blog/BlogActions.tsx
"use client";

import { Share2, Download, Check, Copy, Printer } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BlogActions({ title, slug }: { title: string, slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`;
    
    // Use Web Share API if supported (Mobile/Modern Browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    // Trigger browser print dialog - the reliable way to "Save as PDF"
    // We will use CSS media queries to hide navbars/footers during this print
    window.print();
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <button 
        onClick={handleShare}
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-muted/20 hover:bg-muted/20 hover:border-muted/50 transition-all active:scale-95"
        title="Share Article"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Share2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        )}
        <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground hidden sm:inline-block">
          {copied ? "Copied Link" : "Share"}
        </span>
      </button>

      <button 
        onClick={handleDownload}
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-muted/20 hover:bg-muted/20 hover:border-muted/50 transition-all active:scale-95"
        title="Save as PDF"
      >
        <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground hidden sm:inline-block">
          PDF
        </span>
      </button>
    </div>
  );
}