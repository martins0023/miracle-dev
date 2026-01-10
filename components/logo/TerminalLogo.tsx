// components/logo/TerminalLogo.tsx
import { cn } from "@/lib/utils";

export default function TerminalLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-10 w-auto", className)}
      aria-label="Miracle Oladapo Logo"
    >
      {/* The Prompt '>' symbol */}
      <path
        d="M20 30 L40 50 L20 70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
      
      {/* The Letter 'M' - styled like JetBrains Mono */}
      <path
        d="M55 30 V70 M55 40 L70 55 L85 40 M85 30 V70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />

      {/* The Blinking Cursor '_' - Uses the Cyber accent color */}
      <rect
        x="95"
        y="62"
        width="12"
        height="8"
        className="text-cyber animate-pulse"
        fill="currentColor"
      />
    </svg>
  );
}