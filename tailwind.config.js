/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#5B8C51",
      secondary: "#EDDD5E",
      white: "#FFFFFF",
      title: "#333333",
      subtitle: "#595959",
      list: "#404A3D",
      footer: "#F8F7F0",
      ash: "#999999"
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      signika: "'Signika', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
