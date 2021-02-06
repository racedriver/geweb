const em = (px) => `${px / 16}em`
const rem = (px) => ({ [px]: `${px / 16}rem` })
const px = (num) => ({ [num]: `${num}px` })

module.exports = {
  important: true,
  theme: {
    debugScreens: {
      prefix: 'screen side: ',
      position: ['top', 'left'],
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
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
