/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#222260",
        vert: "#0ACF83",
        rose: " #F56692",
        bleuClair: "rgb(21, 44, 91)",
        backgroundColor2: "#f8f8f8",
        gris1: "#6c7983",
        gris2: "#dbe1e8",
        gris3: "#b2becd",
        gris4: "#454e56",
        gris5: "#2a2e35",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      screens: {
        md: "768px",
        lg: "1044px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
