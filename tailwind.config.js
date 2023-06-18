/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-darkgreen': '#064636',
        'primary-lightgreen': '#F4F6F4',
        'primary-darkblue': '#03045e',
      }
    },
  },
  plugins: [],
}
