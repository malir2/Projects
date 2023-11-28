/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      primary: ["Playfair Display", "serif"],
      secondary: ["Ubuntu", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    extend: {
      colors: {
        primary: "#1b1e11",
        secondary: "#847c6f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
