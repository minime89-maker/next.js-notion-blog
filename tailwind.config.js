

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
      keyframes: {
        wiggle: {
          '0%': {transform: 'translate(1px, 1px) rotate(0deg)'},
          '30%': {transform: 'translate(-1px, -2px) rotate(1deg)'},
          '60%': {transform: 'translate(0px, 1px) rotate(-1deg)'},
          '100%': {transform: 'translate(1px, 1px) rotate(0deg)'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
