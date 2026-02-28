/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#18165F',
        'header-accent': '#008AFB',
        'owaldron-bg': '#18165F',
        'owaldron-blue': '#01569C',
        'card-bg': '#18165F',
        'card-border': '#008AFB'
      },
      fontFamily: {
        sans: ['var(--main-font)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

