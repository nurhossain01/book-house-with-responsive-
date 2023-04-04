/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#db8311",

          "secondary": "#8e16ce",

          "accent": "#8ab2f7",

          "neutral": "#251A2D",

          "base-100": "#FFFFFF",

          "info": "#87DBEE",

          "success": "#25CB96",

          "warning": "#EDCB45",

          "error": "#EF485C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

