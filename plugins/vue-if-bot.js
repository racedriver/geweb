//improved based on https://github.com/Developmint/vue-if-bot
export default {
  functional: true,
  props: {
    regex: RegExp,
    invert: Boolean,
  },
  render: function render(h, context) {
    let slots = context.slots
    let props = context.props
    let dummyEl = h('div', {}, [])

    if (process.server) return dummyEl

    let botRegex = props.regex || /bot|googlebot|crawler|spider|robot|crawling/i
    let isBot = navigator.userAgent && botRegex.test(navigator.userAgent)
    let shouldShow = props.invert ? isBot : !isBot

    if (!shouldShow) return dummyEl

    return h('div', {}, slots().default)
  },
}
