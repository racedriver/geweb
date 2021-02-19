<!-- Please do not add a space inside the span -->
<template>
  <div :class="this.rootClass">
    <template v-for="(entry, i) in this.entries">
      <!-- prettier-ignore -->
      <ul v-if="Array.isArray(entry)" :key="i" class="list-disc list-inside	">
        <li v-for="(item, i2) in entry" :key="i2" :class="item.clazz">
          <DynamicTextSpan :entry="item" :isLast="isLast(i2)" :subClass="subClass"/>
        </li>
      </ul>
      <nuxt-link v-else-if="entry.href && entry.href.startsWith('/')" :to="entry.href" :class="entry.clazz" :key="i">
        <DynamicTextSpan :entry="entry" :isLast="isLast(i)" :subClass="subClass"/>
      </nuxt-link>
      <a v-else-if="entry.href" :to="entry.href" :class="entry.clazz" :key="i">
        <DynamicTextSpan :entry="entry" :isLast="isLast(i)" :subClass="subClass"/>
      </a>
      <template v-else>
        <DynamicTextSpan :entry="entry" :isLast="isLast(i)" :subClass="subClass ? subClass : '' + ' ' + entry.clazz"/>
      </template>
    </template>
  </div>
</template>

<!--suppress JSUnresolvedVariable -->
<script>
/**
 * Defaults:
 *  rootClass = undefined //not in entities
 *
 *  href = undefined
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
 *    [@see ONE OF THE EXAMPLES ABOVE] // will be a list
 *  ]
 *  {
 *    rootClass = ''
 *    href: 'https://skylines.one/'
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
    subClass: {
      type: String,
      required: false,
    },
    value: {
      type: [String, Array, Object],
      required: true,
    },
  },
  data: function () {
    let root = this.value ?? []
    let text = this.isObject(root) ? root.text : root

    let lambda = (it) => (this.isObject(it) ? it : Array.isArray(it) ? it.map(lambda) : {value: it})
    let entities = (Array.isArray(text) ? text.map(lambda) : [lambda(text)])

    const addDefaults = (it) => ({
      ...it,
      seperator: it.seperator ?? root.seperator ?? ' ',
      linebreaks: it.linebreak ?? Boolean(root.linebreak),
      href: it.href ?? root.href,
      clazz: (it.class ?? root.class ?? '') + (it.linkClass ?? root.linkClass ?? ''),
    });
    let withDefaults = entities.map(it => Array.isArray(it) ? it.map(addDefaults) : addDefaults(it))

    // let filter = withDefaults.filter((it) => it.linkClass != null && !it.href)
    // if (filter.length > 0) {
    //   console.warn('Entries with linkClass but no href found...')
    //   console.warn(filter)
    // }

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
