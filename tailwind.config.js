/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#5B8C51",
      primaryDark : "#5F9154",
      secondary: "#EDDD5E",
      secondaryDark : "#E8D331",
      white: "#FFFFFF",
      title: "#333333",
      body: "#595959",
      list: "#404A3D",
      footer: "#F8F7F0",
      ash: "#999999",
      nav: "#1A1A1A",
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      signika: "'Signika', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
