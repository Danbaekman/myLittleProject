/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        customColor: {
          '150': '#FFF1AA',
            
        },
      },

      fontWeight:{
        custom: '900',
      }
    },
  },
  plugins: [],
};

