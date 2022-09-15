/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      primary: {
        100: "#cceceb",
        200: "#99d9d7",
        300: "#66c7c2",
        400: "#33b4ae",
        500: "#00a19a",
        600: "#00817b",
        700: "#00615c",
        800: "#00403e",
        900: "#00201f",
      },
      green: colors.green,
      //CUSTOM COLORS
      //https://www.tailwindshades.com/
      //or crtl g + ctrl k on hexa value (#007ce6)

      dark: {
        100: "#d1d1d1",
        200: "#a3a3a3",
        300: "#747576",
        400: "#464748",
        500: "#18191a",
        600: "#131415",
        700: "#0e0f10",
        800: "#0a0a0a",
        900: "#050505",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
