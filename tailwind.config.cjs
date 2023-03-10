/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
        'claro': '#C5DFFF',
        'escuro': '#061E3C',
        'hover': '#1057B0',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      keyframes:{

        sino_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        },
        
      },
      animation: {
        sino: 'sino_kf 0.31s ease-in-out infinite'
      }
      
    },
  },
  plugins: [],
}
