/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bodyWhite: "#F5F5F0",
        bodyWhite100: "#E3E3DE",
        mainYellow: "#FFB800",
        mainYellowDarker: "#CC9600",
        softRed: "#FFB800",
        charcoal: "#36454F",
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      fontFamily:{
        sans: 'Open Sans',
        montserrat: 'Montserrat',
      }
    },
  },
  plugins: [],
}

