/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Path to the tremor module
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2463AC",
                accent: "#57555D",
            },
        },
    },
    plugins: [],
};
