/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        graymenu: '#273037',
      },
      fontFamily: {
        Merriweather: ["Merriweather Sans"],
      }
    },
  },
  plugins: [],
}

