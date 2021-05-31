const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js, jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Rubik'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      bluegrey: colors.blueGray,
      coolgrey: colors.coolGray,
      grey: colors.gray,
      truegrey: colors.trueGray,
      warmgrey: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuschia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
