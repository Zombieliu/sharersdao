const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow:{
            purple:"0 25px 50px -12px rgba(110,77,246,0.5),0 25px 50px -12px rgba(110,77,246,0.5)"
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
}
