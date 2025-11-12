/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343A40',
        secondary: '#495057',
        accent: '#6C757D',
      }
    },
  },
  plugins: [],
}