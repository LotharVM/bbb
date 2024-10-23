import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-roboto)",
      },
      fontSize: {
        "xl+": "1.375rem",
      },
      colors: {
        grey: {
          100: "#FEF7FF",
          300: "#e6e0e9",
          500: "#CAC4D0",
          700: "#49454f",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
