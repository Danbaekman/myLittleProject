/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crOrange: "#ff6f0f",
        crGreen: "#02a15c",
        crYellow: "#fffae0",
        crWhite: "#ffffff",
        crBlack: "#000000",
      },
    },
  },
  plugins: [],
};
