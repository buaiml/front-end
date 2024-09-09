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
        background: '#1A1A1A',
        darkPurple: '#2D0A31',
        darkRed: '#800000',
        darkPink: '#4A1E2F',
        accent1: '#6B46C1', // Purple
        accent2: '#F687B3', // Salmon
        accent3: '#4299E1', // Blue
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
