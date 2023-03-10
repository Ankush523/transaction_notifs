/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white1" : "#FDFDFD",
        "purple1" : "#0f0023",
        "purple2" : "#C5A0FF",
        "purple3" : "#7b3ee3",
        "purple4" : "#361A66",
        "blue1" : "#B0D7DA",
        "grey1" : "#343939",
      }
    },
  },
  plugins: [],
}