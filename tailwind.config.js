/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F7F7F7',
        'secondary-bg': '#FFFFFF',
        'btn-primary': '#264B5D',
        'table-hover': '#FEECEE',
      },
      width: {

      },
      height: {
        60: '15rem',
        90: '22.5rem',
        120: '30rem',
        128: '32rem;',
        140: '35rem',
        160: '40rem',
        180: '45rem'
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}
