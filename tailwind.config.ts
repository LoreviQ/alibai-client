import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "theme-primary":"#f61e49",
        "theme-secondary":"#2695c4",
        "theme-tertiary":"#2cda9d",
        "theme-dark":"#132639",
        "theme-light":"#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
