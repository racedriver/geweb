<template>
  <DynamicText  :class="this.rootClass" :subClass="this.subClass" v-if="value" :value="value"/>
  <div v-else :class="this.rootClass"><slot></slot></div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: {
      type: [String, Array, Object],
      required: false,
    },
    subClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      rootClass: 'text-6xl-dynamic leading-.80 text-center uppercase font-black pb-1 ' +
        'bg-green-500 text-gradient bg-gradient-to-r to-emerald-600 from-green-300 text-gradient-secondary '
    }
  }
}
</script>
