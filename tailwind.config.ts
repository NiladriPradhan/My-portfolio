/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "star-movement-top": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom linear infinite",
        "star-movement-top": "star-movement-top linear infinite",
      },
    },
  },
  plugins: [],
};
