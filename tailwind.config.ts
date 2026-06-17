import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        estate: {
          gold: "#C9A227",
          beige: "#F5F0E8",
          navy: "#1A2B3C",
          blue: "#4A6FA5",
          charcoal: "#1C1C1C",
          cream: "#FAF8F5",
          warm: "#E8E2D9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
