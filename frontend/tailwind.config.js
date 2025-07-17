/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: "#FFA400", // You can rename these keys if you want specific use cases
        dark: "#3A3E3B",
        light: "#F0EFF4",
        accent: "#b60c44",
      },
    },
  },
  plugins: [],
};
