/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
