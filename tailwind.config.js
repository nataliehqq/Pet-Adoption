/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
      //extend and not override it 
    extend: {
      fontFamily: {
          //never seen css variables or properties looks like when we declare it
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
