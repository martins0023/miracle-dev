// components/logo/MonogramLogo.tsx
// Note: This relies on the font being loaded, but we draw it as SVG path for stability
import { cn } from "@/lib/utils";

export default function MonogramLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("h-10 w-10", className)}
    >
      {/* The 'M' shape - drawn heavy and blocky like Bricolage Bold */}
      <path
        d="M15 20 H35 L50 45 L65 20 H85 V80 H65 V55 L50 80 L35 55 V80 H15 V20Z"
        fill="currentColor"
        className="text-foreground"
      />
      
      {/* The Cyber Scanline cut */}
      <rect
        x="0"
        y="45"
        width="100"
        height="6"
        fill="currentColor"
        className="text-cyber mix-blend-screen"
      />
       {/* Optional: Another thin line for detail */}
       <rect
        x="0"
        y="53"
        width="100"
        height="2"
        fill="currentColor"
        className="text-cyber/50 mix-blend-screen"
      />
    </svg>
  );
}