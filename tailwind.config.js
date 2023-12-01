/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 4px 1px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}