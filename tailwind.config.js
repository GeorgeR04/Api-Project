/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'white':'#ffffff',
        'NavbarColor':'#000000',
        'NavbarColor2':'#1a47dc',
        'GamePage':'#313030',
        'GamePage2':'#000000',
        'grayA':'#9ba2ae',
        'BorderA':'#adadad',
        'textC':'#8997a7',
        'FilmBg':'#393942',
        'hoverC':'#1a46da',
      },

      fontFamily:{
        'body':['Bebas Neue','cursive'],

      },



    },
  },
  plugins: [],
}