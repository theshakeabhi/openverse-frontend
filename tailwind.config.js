module.exports = {
  purge: ['src/**/*.{vue,js,jsx,ts,tsx,mdx}', './nuxt.config.js'],
  theme: {
    screens: {
      // Determined by the lower bound of screen width
      tab: '768px',
      desk: '1024px',
      wide: '1216px',
      hd: '1408px',
    },
    colors: {
      // Accents
      tomato: '#e23600',
      gold: '#efbe00',
      'forest-green': '#008300',
      'dark-turquoise': '#05b5da',
      'dark-slate-blue': '#3c5c99',
      'trans-blue': '#3e58e1',
      'dark-blue': '#23282d',

      // Brand
      yellow: '#ffe033',
      'dark-charcoal': '#30272e',
      pink: '#c52b9b',

      // Active
      'dark-pink': '#7c2264',

      // Grayscale
      black: 'black',
      'dark-gray': '#767676', // rgb(118, 118, 188)
      gray: '#b0b0b0', // rgb(176, 176, 176)
      'light-gray': '#d8d8d8', // rgb(216, 216, 216)
      white: 'white',

      // Semi-transparent
      'dark-charcoal-04': 'rgba(48, 39, 46, 0.04)',
      'dark-charcoal-20': 'rgba(48, 39, 46, 0.2)',
      'dark-charcoal-60': 'rgba(48, 39, 46, 0.6)',

      // Special keywords
      tx: 'transparent',
      curr: 'currentColor',
    },
    fill: (theme) => theme('colors'),
    spacing: {
      // Constants
      px: '1px',
      ch: '1ch',
      ex: '1ex',

      // Indexed by multiples of baseline (~ `0.25rem`)
      0: '0',
      1: '0.25rem',
      2: '0.50rem',
      4: '1.00rem',
      6: '1.50rem',
      8: '2.00rem',
      10: '2.50rem',
      12: '3.00rem',
      16: '4.00rem',
      20: '5.00rem',
      24: '6.00rem',
      30: '7.50rem',
    },
    ringWidth: {
      DEFAULT: '1.5px',
    },
    ringOffsetWidth: {
      2: '2px',
    },
    fontSize: {
      // Deprecated
      lg: '1.12rem',
      lgr: '1.43rem',

      // Headings, where h[n] => [7-n]xl
      '6xl': [
        '2.2857142857rem', // 32px
        '1.3', // 130%
      ],
      '5xl': [
        '2.0000000000rem', // 28px
        '1.3', // 130%
      ],
      '4xl': [
        '1.7142857143rem', // 24px
        '1.3', // 130%
      ],
      '3xl': [
        '1.3571428571rem', // 19px
        '1.3', // 130%
      ],
      '2xl': [
        '1.1428571429rem', // 16px
        '1.3', // 130%
      ],

      // Content
      base: [
        '1.0000000000rem', // 14px
        '1.5', // 150%
      ],
      sm: [
        // small, eg. label
        '0.9285714286rem', // 13px
        '1.3', // 130%
      ],
      sr: [
        // smaller, eg. caption, category
        '0.8571428571rem', // 12px
        '1.3', // 130%
      ],
      xs: [
        // extra small, eg. time
        '0.7857142857rem', // 11px
        '1.2', // 120%
      ],
    },
    lineHeights: {
      normal: '1.5',
      snug: '1.3',
      tight: '1.2',
      none: '1.0',
    },
    fontFamily: {
      system: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        '"Oxygen"',
        '"Cantarell"',
        '"Fira Sans"',
        '"Droid Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      heading: ['"Inter"', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
      icons: ['"Vocabulary Icons"'],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      ringColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [],
}
