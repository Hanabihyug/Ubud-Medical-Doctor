/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          100: '#E3EFFB',
          200: '#F6F9FC',
          300: '#8AC4EF',
          400: '#4CA6E4',
          500: '#258BD2',
          600: '#176EB2',
          700: '#145890',
          800: '#154E7C',
          900: '#163F67'
        }
      }
    },
  },
  plugins: [],
}