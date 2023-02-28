/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "345":"345px",
        "44":"44px",
        "101":"101px",
      },
      height:{
        "44":"44px",
        "23":"23px"
      }
    },
  },
  plugins: [],
}
