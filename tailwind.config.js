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
        RobotoSlab: ["Roboto Slab"],
      },
      spacing: {
        'wide': '0.25rem',
        'wider': '0.5rem',
        'widest': '1rem',
      },
      screens: {
        'xxs': '200px',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.word-spacing-wide': {
          wordSpacing: '0.25rem',
        },
        '.word-spacing-wider': {
          wordSpacing: '0.5rem',
        },
        '.word-spacing-widest': {
          wordSpacing: '1rem',
        },
      })
    }
  ],
}