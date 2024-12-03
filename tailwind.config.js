/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      'Paleblue': 'hsl(225, 100%, 94%)',
      'Brightblue': 'hsl(245, 75%, 52%)',
      'Verypaleblue': 'hsl(225, 100%, 98%)',
      'Desaturatedblue': 'hsl(224, 23%, 55%)',
      'Darkblue': 'hsl(223, 47%, 23%)'
      },
      fontFamily:{
        'RedHatDisplay':['Red-Hat-Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

