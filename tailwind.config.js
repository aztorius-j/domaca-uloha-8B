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
      screens: {
        'sm': '600px',
        'md': '750px',
        'lg': '1010px',
      },
      spacing: {
        'wide': '0.25rem',
        'wider': '0.5rem',
        'widest': '1rem',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
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