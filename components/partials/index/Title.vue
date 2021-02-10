<template>
    <div class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center uppercase font-black
    text-transparent bg-green-500 bg-clip-text bg-gradient-to-r to-emerald-600 from-green-300 text-gradient-secondary ">
      <DynamicText v-if="value" :value="value" />
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: String
  }
}
</script>
