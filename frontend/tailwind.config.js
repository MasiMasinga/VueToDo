/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      }
    },
  },
  plugins: [],
}

