import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#71AAB1", // Cadet Blue
        secondary: "#31403A", // Kombu Green
        accent: "#FAB8B5", // Spanish Pink
        neutral: "#E5E5E5", // Platinum
        dark: "#1A1A1A", // Black
        deep: "#48696E", // Deep Space Sparkle
      },
      fontFamily: {
        display: ["Bomber Escort Condensed", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
