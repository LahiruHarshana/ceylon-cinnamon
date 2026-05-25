import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cinnamonBlack: "#0a0a0a",
        cinnamonGold: "#c9a962",
        cinnamonCream: "#f5f0e6"
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-cormorant)", "serif"],
        accent: ["var(--font-noto-serif)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
