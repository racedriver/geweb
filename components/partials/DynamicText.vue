<!-- Please do not add a space inside the span -->
<template>
  <div :class="this.rootClass">
    <!-- prettier-ignore -->
    <span v-for="(entry, i) in this.entries" :key="i" :class="entry.clazz"><!--
    --><a v-if="entry.href" :href="entry.href" :class="entry.linkClass">{{ entry.value }}</a><!--
    --><template v-else>{{ entry.value }}</template><!--
    -->{{ isLast(i) ? '' : entry.seperator }}<!--
    --><br v-if="isLast(i) ? false : entry.linebreaks"/><!--
--></span>
  </div>
</template>

<!--suppress JSUnresolvedVariable -->
<script>
/**
 * Defaults:
 *  rootClass = undefined //not in entities
 *
 *  href = undefined
 *  linkClass = undefined,
 *  class = undefined
 *  seperator = ' '
 *  linebreak = false
 *
 *  entity.value = undefined
 *  entity.* defaults to root.*
 *
 *
 * Examples:
 *  "TEXT"
 *  [ "TEXT1", "TEXT2", "TEXT3" ]
 *  [
 *    { value: "TEXT1" },
 *    { seperator: ", " }
 *    { value: "TEXT2", seperator: ", " },
 *    { value: "TEXT3", linebreak: true },
 *    { value: "TEXT4", class: "text-white" },
 *    { value: "TEXT5", link: 'https://skylines.one/contact-us' }
 *  ]
 *  {
 *    rootClass = ''
 *    href: 'https://skylines.one/'
 *    linkClass: 'block',
 *    class: 'block',
 *    seperator: ' '
 *    linebreaks: true,
 *    text: @see ONE OF THE EXAMPLES ABOVE
 *  }
 *
 *
 * Dynamic line break (with Tailwind/CSS classes):
 *  Add class: 'block' to the text entry us want to put in the next line.
 *  To undo your action add 'inline'
 */
export default {
  name: 'DynamicText',
  props: {
    value: {
      type: [String, Array, Object],
      required: true,
    },
  },
  data: function () {
    let root = this.value ?? []
    let text = this.isObject(root) ? root.text : root

    let lambda = (it) => (this.isObject(it) ? it : { value: it })
    let entities = Array.isArray(text) ? text.map(lambda) : [lambda(text)]

    let withDefaults = entities.map((it) => ({
      ...it,
      seperator: it.seperator ?? root.seperator ?? ' ',
      linebreaks: it.linebreak ?? Boolean(root.linebreaks),
      url: it.url ?? root.url,
      clazz: it.class ?? root.class,
      linkClass: it.linkClass ?? root.linkClass,
    }))

    let filter = withDefaults.filter((it) => it.linkClass != null && !it.url)
    if (filter.length > 0) {
      console.warn('Entries with linkClass but no href found...')
      console.warn(filter)
    }

    return {
      rootClass: root.rootClass ?? null,
      entries: withDefaults,
    }
  },
  methods: {
    isLast(i) {
      return i === this.entries.length - 1
    },
    isObject(o) {
      return typeof o === 'object' && o.constructor === Object
    },
  },
}
</script>
