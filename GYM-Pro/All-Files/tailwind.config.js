/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1750px" },
      xl: { max: "1279px" },
      lg: { max: "1030px" },
      md: { max: "1000px" },
      sm: { max: "769px" },
      xsm: { max: "280px" },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
