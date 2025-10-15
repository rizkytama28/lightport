// GUNAKAN INI
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // penting biar toggle jalan
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}