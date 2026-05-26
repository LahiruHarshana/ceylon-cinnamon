import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: "#a96f24",
          hover:   "#8f5c1a",
          light:   "#c98c3f",
          pale:    "#fdf1e2",
          border:  "#e8cfaa"
        },
        warm: {
          50:  "#faf8f5",
          100: "#fdf9f4",
          200: "#f7ede0",
          300: "#ead5b5"
        },
        sage: {
          DEFAULT: "#4a6e4e",
          light:   "#ecf3eb",
          border:  "#c4d9c6"
        },
        "text-dark":  "#1a1108",
        "text-mid":   "#5a4130",
        "text-soft":  "#9b8472",
        "text-muted": "#c4b5a5",
        // legacy
        ink:   "#24150e",
        gold:  "#a96f24",
        cream: "#fff8ec"
      },
      fontFamily: {
        body:    ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-cormorant)", "serif"],
        accent:  ["var(--font-noto-serif)", "serif"]
      },
      boxShadow: {
        amber:    "0 8px 28px rgba(169,111,36,0.32)",
        "amber-lg": "0 14px 40px rgba(169,111,36,0.40)"
      }
    }
  },
  plugins: []
};

export default config;
