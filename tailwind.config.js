module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Roboto'],
      serif: ['Lobster', 'Lobster'],
    },
    extend: {
      colors: {
        'primary': '#26547C',
        'secondary': '#EF476F',
        'secondary-dark': '#D24366',
        'back': '#FCFCFC',
        'third': '#FFD166',
        'fourth': '#06D6A0',
        'danger': '#FF5757',
        'alert': '#FFCE4F',
        'success': '#62DF4D',
        'link': '#3DADFF',
        'back-dark': '#eeeeee',
        'stroke': '#989898',
        'gray': '#292929',
        'new-planner': '#FEF6F8'
      }
    },
  },
  variants: {
    border: ['hover', 'focus', 'group-focus'],
  },
  plugins: [],
}
