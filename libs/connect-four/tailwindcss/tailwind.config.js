const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      black: '#000000',
      'royal-purple': '#5C2DD5',
      'violet-blue': '#7945FF',
      'salmon-pink': '#FD6687',
      'pastel-yellow': '#FFCE67',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
