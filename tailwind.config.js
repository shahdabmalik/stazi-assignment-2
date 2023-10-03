/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./index.html",
    "./src/**/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      aspectRatio : {
        "4.5/3" : "4.5 / 3"
      }
    },
  },
  plugins: [],
}

