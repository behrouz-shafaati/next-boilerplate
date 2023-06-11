/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#ffffff",
      primary: { 900: "#737919", 100: "#F3F3EA" },
      primaryDark: { 900: "#737919", 100: "#F3F3EA" },
      black: { 800: "#383838", 200: "#D2D2D2" },
      red: { 600: "#FF6F6F" },
    },
  },
  plugins: [],
};
