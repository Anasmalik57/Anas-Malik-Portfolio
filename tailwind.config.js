/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: {
        'webkit-box': '-webkit-box',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
      },
      colors: {
        'custom-dark': 'rgba(17, 25, 40, 0.83)',
      },
      borderColor: {
        'custom-border': 'rgba(255, 255, 255, 0.125)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-polygon': {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}