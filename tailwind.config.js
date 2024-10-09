/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'base' : '#070F2B',
        'color1': '#48374C',
        'color2': '#F5EBC3',
        'color3': '#34343B',
        'color4': '#F5F5F5',
      },
      fontFamily: {
        'custom1': ['Irish Grover', 'sans-serif'],
        'custom2': ['Inter', 'serif'],
      },
      fontSize: {
        'custom1': '85px',
        'custom2': '75px',
        'custom3': '50px',
        'custom4': '40px',
        'custom5': '30px',
      },
      margin: {
        'custom1': '5rem',
        'custom2': '3rem',
        'custom3': '2rem',
        'custom4': '1rem',
        'custom5': '260px',
        'custom6': '0.5rem',
      },
    },
  },
  plugins: [],
}
