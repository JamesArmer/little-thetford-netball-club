/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        0: "0",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      width: {
        "1/10": "10%",
        "1/9": "11.1111111111%",
      }
    },
  },
  plugins: [],
};
