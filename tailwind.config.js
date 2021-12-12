module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Font Imports
    fontFamily: {
      sans: ['Lexend Deca'],
    },
    container: {
      padding: {
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
