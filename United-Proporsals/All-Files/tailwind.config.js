/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    colors: {
      primary: "#ac2c2b",
      secondary: "#2c548d",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
