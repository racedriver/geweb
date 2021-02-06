<template>
  <div>
    <div v-if="typeof text === 'string' || text instanceof String">{{ text }}</div>
    <span v-else
         :class="part.clazz"
         v-for="(part, i) in this.text"
         :key="i"
    >{{ part.value }}</span>
  </div>
</template>

<script>
export default {
  name: 'DynamicText',
  props: {
    text: [String, Array],
  },
}
</script>
