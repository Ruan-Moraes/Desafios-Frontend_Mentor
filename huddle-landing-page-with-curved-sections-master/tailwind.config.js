/** @type {import('tailwindcss').Config} */

// ## Colors

// ### Primary

// - Pink: hsl(322, 100%, 66%)
// - Light Pink: hsl(321, 100%, 78%)
// - Light Red: hsl(0, 100%, 63%)

// ### Neutral

// - Very Dark Cyan: hsl(192, 100%, 9%)
// - Very Pale Blue: hsl(207, 100%, 98%)

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: 'hsl(322, 100%, 66%)',
          light: 'hsl(321, 100%, 78%)',
        },
        red: {
          DEFAULT: 'hsl(0, 100%, 63%)',
        },
        darkCyan: {
          DEFAULT: 'hsl(192, 100%, 9%)',
        },
        paleBlue: {
          DEFAULT: 'hsl(207, 100%, 98%)',
        },
      },
    },
  },
  plugins: [],
};
