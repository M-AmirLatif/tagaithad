import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#0b6b3a", // Primary brand green
            800: "#074c28", // Dark forest green
            900: "#04331b", // Deepest green
            950: "#021f10",
          },
          gold: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#eab308",
            500: "#c9a227", // Primary brand gold
            600: "#a6851b",
            700: "#7e6310",
            800: "#5d470b",
            900: "#3d2e07",
          },
          warm: "#faf8f5",
          warmLight: "#fcfbf9",
          warmBorder: "#e8e3da",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
