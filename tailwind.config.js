/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.ejs'
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0C0923',
        'codesphere-purple': '#814BF6',
        'codesphere-blue': '#00BCFF',
        'codesphere-dark': '#090909',
      },
      backgroundImage: {
        "purple-bubble": "radial-gradient(50% 50% at 50% 50%, rgba(129, 75, 246, 0.00) 57%, rgba(129, 75, 246, 0.22) 83.5%, rgba(129, 75, 246, 0.42) 100%)",
        "blue-bubble": "radial-gradient(50% 50% at 50% 50%, rgba(129, 75, 246, 0.00) 57%, rgba(0, 188, 255, 0.22) 83.5%, rgba(0, 188, 255, 0.42) 100%)"
      },
      boxShadow: {
        "purple-bubble": "0px 0px 200px 0px rgba(129, 75, 246, 0.60) inset",
      },
      scale: {
        "-100": "-1",
      },
      animation: {
        horizontalMove: 'horizontalMove 2s linear infinite',
      },
      keyframes: {
        horizontalMove: {
          '0%': { left: '0' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
    require("tailwindcss-inner-border"),
    require("tailwind-gradient-mask-image"),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("@tailwindcss/forms")
  ],
}