/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./*.html", "./js/*.js"],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['"Playfair Display"', "serif"],
                montserrat: ["Montserrat", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                footer: "#2C1810",
            },
        },
    },
    plugins: [],
};
