<template>
    <div class="text-6xl-dynamic leading-.80 text-center uppercase font-black pb-1
     bg-green-500 text-gradient bg-gradient-to-r to-emerald-600 from-green-300 text-gradient-secondary ">
      <DynamicText v-if="value" :value="value" />
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: {
      type: [String, Array, Object],
      required: false,
    },
  }
}
</script>
