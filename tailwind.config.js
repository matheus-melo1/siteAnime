/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/createCard.js", "./js/carousel.js", "./js/anime.js", "./template.html", "./detail.html"],
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