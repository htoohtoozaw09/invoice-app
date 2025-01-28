/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,ts,js,jsx}",
        "../node_modules/flowbite/**/*.js"],
    theme: {
      fontFamily : {
        sans : ["Montserrat", "Padauk", "sans-serif"],
      },
      extend: {},
    },
    plugins: [],
  }