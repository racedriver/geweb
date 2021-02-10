const em = (px) => `${px / 16}em`
const rem = (px) => ({ [px]: `${px / 16}rem` })
const px = (num) => ({ [num]: `${num}px` })

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: false,
  theme: {
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
        teal: colors.teal,
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
      display: ['hover'],
      filter: ['hover', 'group-hover'],
      zIndex: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-filters'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './static/data/**/*.{js,ts}',
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
