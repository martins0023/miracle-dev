// components/logo/ShieldCodeLogo.tsx
import { cn } from "@/lib/utils";

export default function ShieldCodeLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-10 w-10", className)}
    >
       {/* Left Bracket / Base structure - White */}
      <path
        d="M10 20 L45 50 L10 80"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square" 
        className="text-foreground"
      />
      
      {/* Right Structure / Abstract 'M' and Shield - Cyber Accent */}
      <path
        d="M55 20 V80 M55 20 L90 50 L55 80"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        className="text-cyber"
      />
       {/* A subtle glow effect filter could be added here in CSS */}
    </svg>
  );
}