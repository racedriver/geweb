const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: false,
  darkMode: 'class',
  theme: {
    fontSizeDynamic: theme => Object.keys(theme('fontSize')).slice(0, -1).filter(it => it.key !== "lg"),
    pxSizeDynamic: theme => Object.keys(theme('padding')).filter(it => !(it.key in ["11", "12", "14"])),
    debugScreens: {
      prefix: 'screen side: ',
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        sans: [
          'Favorit Pro',
          'favorit-pro',
          'Metropolis',
          'Arial',
          'Helvetica Neue',
          'Helvetica',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        '10xl': '10rem',
      },
      lineHeight: {
        '.75': '.75em',
        '.80': '.80em',
        '.90': '.80em'
      },
      colors: {
        blush: {
          300: '#fba4d4',
          400: '#fc6ab2',
          500: '#ef467e',
          600: '#f72566',
          700: '#df1c50',
          800: '#b3183e',
          900: '#8e1531',
        },
        cerise: {
          300: '#faa4d5',
          500: '#fc408d',
          700: '#cb2c66',
        },
        maroon: {
          600: '#eb4759',
        },
        mango: {
          400: '#f69349',
          500: '#f66924',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        cyan: colors.cyan,
        emerald: colors.emerald,
        lime: colors.lime,
        'light-blue': colors.lightBlue,
      },
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      'brightness-0': 'brightness(0%)',
      'brightness-10': 'brightness(10%)',
      'brightness-25': 'brightness(25%)',
      'brightness-50': 'brightness(50%)',
      'brightness-75': 'brightness(75%)',
      'brightness-100': 'brightness(100%)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
      invert: 'invert(1)',
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['group-hover'],
      outline: ['hover', 'dark'],
      display: ['hover'],
      filter: ['hover', 'group-hover'],
      zIndex: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-filters'),
    require('./tailwindcss-text-size-dynamic.js'),
    require('./tailwindcss-px-size-dynamic.js'),
    require('./tailwindcss-py-size-dynamic.js'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './static/data/**/*.{js,ts}',
      './static/js/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './content/**/**.md',
    ],
  },
  // screens: {
  //   tyd: { max: em(399) },
  //   ty: em(400),
  //   xsd: { max: em(599) },
  //   xs: em(600),
  //   smd: { max: em(767) },
  //   sm: em(768),
  //   mdd: { max: em(959) },
  //   md: em(960),
  //   lgd: { max: em(1023) },
  //   lg: em(1024),
  //   xld: { max: em(1279) },
  //   xl: em(1280),
  // }
}
