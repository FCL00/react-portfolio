/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'metal-gradient': `linear-gradient(to right, 
          #343434 0%, 
          #474747 20%, 
          #828282 50%, 
          #474747 75%, 
          #343434 100%)`,
      },
    },
  },
  plugins: [],
};
