/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "general-sans-regular": ["GeneralSans-Regular", "sans-serif"],
        "general-sans-medium": ["GeneralSans-Medium", "sans-serif"],
        "general-sans-semibold": ["GeneralSans-Semibold", "sans-serif"],
      },
      colors: {
        primary: "#2463AC",
        accent: "#57555D",
        secondery: "#DFFAE8",
        "lite-red": "#FFF4F5",
        "primary-border": "#368FCF",
        "secondery-border": "#CFCED4",
        "active-menu": "#EE5920",
        "inactive-menu": "#43B6E5",
        "primary-text": "#1C1C1E",
        "secondery-text": "#3A383E",
        "dashboard-text": "#57555D",
        "green-text": "#306049",
        "red-text": "#99202B",
        orange: "#D14814",
        "danger": "#D14814",
        "red": "#CC2B39",
        "purple": {
            200: "#D8D3DF",
            800: "#372B49"
        },
        grey: "#3A383E",
        grey: {
            200: "#E4E3E7",
            700: "#74717C"
        },
        "background": "#F9F9FA"
      },
    },
  },
  plugins: [require("daisyui")],
};
