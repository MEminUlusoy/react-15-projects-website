/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "f1": ['Lato', "sans-serif"],
        "f2": ['Oswald', "sans-serif"],
        "f3": ['Playfair Display', "sans-serif"],
        "f4": ['Roboto Slab', "serif"],
      },
    },
  },
  plugins: [],
}