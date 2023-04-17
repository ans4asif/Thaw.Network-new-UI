/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",

    //
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2463AC",
      },
    },
  },
  plugins: [require("daisyui")],
};
