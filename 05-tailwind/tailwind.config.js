/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "320px", max: "759px" },
      md: { min: "760px", max: "1023px" },
      lg: { min: "1024px" },
    }
  },
  plugins: [],
}