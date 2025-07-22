/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // ✅ Quan trọng
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/goto/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}