<template>
  <span :class="(subClass ? subClass : '')"><!--
    --><template v-if="entry.value">{{ entry.value }}</template><!--
    -->{{ isLast ? '' : entry.seperator }}<!--
    --><br v-if="isLast ? false : entry.linebreaks"/><!--
--></span>
</template>

<script>
export default {
  name: "DynamicTextSpan",
  props: {
    subClass: {
      type: String,
      required: false,
    },
    entry: {
      type: Object,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
