/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      minHeight: {
        'content': "calc(100vh - (70px + 70px))",
      }
    },
  },
  plugins: [],
}