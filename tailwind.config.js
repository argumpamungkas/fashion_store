/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "cursive"],
      },
      colors: {
        primary1: "#6875F5",
        primary2: "#5145CD",
        primary3: "#42389D",
        bgColor: "#CDDBFE",
        bgBorder: "#1A56DB",
      },
    },
  },
  plugins: [],
};
