/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    colors: {
      primary: "#20c997",
      secondary: "#212529",
    },
    fontFamily: {
      primary: ["Arimo", "sans-serif"],
      second: ["Montserrat", "sans-serif"],
      third: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
