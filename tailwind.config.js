/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/createCard.js", "./js/carousel.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        poppins: 'Poppins',
        logo: 'Logo',
      }
    },
  },
  plugins: [],
}