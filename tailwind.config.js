

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
        fontFamily: {
          'sans': ['IBM Plex Sans', 'Helvetica Neue', 'sans-serif'],
          'serif': ['IBM Plex Serif', 'Georgia', 'serif'],
          'mono': ['IBM Plex Mono', 'Menlo', 'monospace'],
        },
    extend: {
      colors: {
        backgroundColor: '#F9FAFB',
        backgroundDark: '#202023',
        button: '#319795',
        buttonDark: '#81E6D9',
        social: '#2C7A7B',
        socialDark: '#81E6D9',
        callout: '#F4F4F5',
        calloutDark: '#3a3a40'
      },
      textColor: {
        textPrimary: '#1A202C',
        textPrimaryDark: '#EEEEEE',
        textSecondary: '#262F40',
        textSecondaryDark: '#E0E0E0',
        textTertiary: '#6A6462',
        textTertiaryDark: '#ADADAD',
        textButton: '#fff',
        textLinks: '#81E6D9'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
