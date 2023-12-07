/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      primary: ["Merriweather Sans"],
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
