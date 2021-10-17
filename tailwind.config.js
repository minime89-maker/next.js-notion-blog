
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: '#F9F5F1',
        backgroundDark: '#202023',
        navigationBar: '#F0E7DB',
        navigationDark: '#313135',
        button: '#319795',
        buttonDark: '#81E6D9',
        social: '#2C7A7B',
        socialDark: '#81E6D9'
      },
      textColor: {
        textPrimary: '#1A202C',
        textPrimaryDark: '#EEEEEE',
        textSecondary: '#262F40',
        textSecondaryDark: '#E0E0E0',
        textTertiary: '#6A6462',
        textTertiaryDark: '#ADADAD',
        textButton: '#fff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
