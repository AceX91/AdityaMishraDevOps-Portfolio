/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a', // Slate 900
        secondary: '#1e293b', // Slate 800
        accent: '#38bdf8', // Sky 400
        accentHover: '#0ea5e9', // Sky 500
      }
    },
  },
  plugins: [],
}