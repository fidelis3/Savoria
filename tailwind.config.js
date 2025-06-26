/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/*.js"],
    theme: {
        extend: {
            fontFamily:{
                playfair: ['"Playfair Display"', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                
            },
        },
    },
    plugins: [],
};
