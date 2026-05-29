import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        crimson: ["var(--font-crimson)", "serif"],
      },
      colors: {
        void: "var(--bg-void)",
        deep: "var(--bg-deep)",
        surface: "var(--bg-surface)",
        card: "var(--bg-card)",
        crimson: {
          DEFAULT: "var(--accent-crimson)",
          light: "var(--accent-crimson-light)",
        },
        gold: {
          DEFAULT: "var(--accent-gold)",
          light: "var(--accent-gold-light)",
        },
        silver: "var(--accent-silver)",
      },
      animation: {
        "fade-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        flicker: "flicker 5s infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;