/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
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
                "orange": "#D14814",
            },
        },
    },
    plugins: [require("daisyui")],
};
