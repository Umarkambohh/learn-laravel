/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "1px 2px 10px 1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}