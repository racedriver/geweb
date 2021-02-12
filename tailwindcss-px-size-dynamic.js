const plugin = require('tailwindcss/plugin');
const {fromPairs, dropWhile} = require('lodash');
const nameClass = require('tailwindcss/lib/util/nameClass').default

const apply = (classes) => [`@apply ${Array.isArray(classes) ? classes.join(" ") : classes}`]
  .reduce((ac, a) => ({...ac, [a]: {}}), {})

//noinspection JSValidateTypes
module.exports = plugin(function ({theme, variants, e, addComponents}) {

  let themeData = theme('pxSizeDynamic');
  let modifiers = Array.isArray(themeData) ? themeData : Object.keys(themeData)
  const screens = ['', ...theme('pxSizeDynamicScreens', Object.keys(theme('screens', {})))]

  const utilities = fromPairs(
    modifiers.map(modifier => [
      nameClass('px', modifier + "-dynamic"),
      apply(dropWhile(modifiers, (it) => it !== modifier).slice(0, screens.length)
        .map((it, index) => `${screens[index] !== '' ? screens[index] + '\:' : ''}px-${it}`))
    ])
  );

  addComponents(utilities, ['responsive', ...variants('pxSizeDynamic')]);
}, {
  theme: {
    pxSizeDynamic: theme => theme('padding'),
  },
  variants: {
    pxSizeDynamic: ['responsive'],
  },
});
