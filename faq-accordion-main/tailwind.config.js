/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      spacing: {
        168: "42rem",
      },
      colors: {
        purple: "#B42AF2",
      },
      backgroundImage: {
        purpleImageDesktop:
          "url('assets/images/background-pattern-mobile.svg')",
        purpleImageDesktop:
          "url('assets/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
