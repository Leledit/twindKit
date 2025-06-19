import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["sans-serif", "poppins"],
    },
  },
  plugins: [],
} satisfies Config;
