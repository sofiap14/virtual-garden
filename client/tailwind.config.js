/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      greenBG: '#b8d8be',
      darkBG: '#013220',
      palepinkBG: '#FFF6F2',
      ...colors
    }
  },
  plugins: [],
}