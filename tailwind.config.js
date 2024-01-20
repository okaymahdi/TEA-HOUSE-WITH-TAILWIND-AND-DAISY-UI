/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        clifford: "",
      },
    }
  },
  plugins: [require("daisyui")]
};