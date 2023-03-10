/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
