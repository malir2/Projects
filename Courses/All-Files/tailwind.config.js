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
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    colors: {
      primary: "#009999",
      secondary: "#202020",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
