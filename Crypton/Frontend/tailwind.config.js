/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      primary: ["Lato", "serif"],
      secondary: ["Poppins", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "850px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    colors: {
      primary: "#16d5ffFF",
      secondary: "#999999FF",
      third: "rgb(242, 248, 254)",
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
