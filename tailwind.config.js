/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green-accent': '#46A358',
        'dark-accent': '#3D3D3D',
        'lightgray': '#F5F5F5',
        'gray-image': '#FBFBFB',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}

