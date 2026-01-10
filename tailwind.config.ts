import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Uses Inter for standard text, but adds Bricolage for headings/display
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-bricolage)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "#0A0A0A", // Deep charcoal/black
        foreground: "#FAFAFA", // Off-white
        muted: "#262626",      // Dark grey for borders/cards
        // The Cybersecurity Accent Color (Electric Cyan)
        cyber: {
          DEFAULT: "#00E5FF",
          dim: "rgba(0, 229, 255, 0.1)",
          glow: "rgba(0, 229, 255, 0.5)",
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;