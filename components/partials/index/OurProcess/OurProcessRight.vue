<template>
  <div class="container margin-bottom-double position-relative z-index10 text-white">
    <div
      class="col lg-7 md-12 alignself-center no-margin-bottom-lg text-white"
    >
      <h3>{{ entry.title }}</h3>
      <div class="margin-bottom">{{ entry.text }}</div>
    </div>
    <div
      class="col lg-6 md-12 order-first flex items-center flexh-space-between padding-top-bottom-double no-margin-bottom-lg position-relative"
    >
      <div class="c-step">
        {{
          entry.id.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        }}
      </div>
      <img :class="entry.special ? '' : 'margin-left hidden-only-lg'" :src="entry.image" width="128"/>
      <img v-if="!entry.special" :src="entry.image" class="c-arrow-left hidden-md"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurProcessRight',
  props: {
    entry: {
      id: Number,
      image: String,
      title: String,
      text: String,
      special: Boolean,
    },
  },
}
</script>

<style scoped></style>
