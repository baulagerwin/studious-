/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        first: "#37669E",
        second: "#8CC0FF",
        third: "#6AA5EB",
        fourth: "#9E7428",
        fifth: "#EBBD6A",
      },
    },
  },
  plugins: [],
};
