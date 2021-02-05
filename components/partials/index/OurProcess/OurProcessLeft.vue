<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div
    :class="'container position-relative padding-top-bottom-double' + (entry.special ? '' : ' margin-bottom-double')">
    <div class="c-step-decoration__left"></div>
    <div
      class="col lg-6 md-12 order-first flex items-center padding-top-bottom-double no-margin-bottom-lg flexh-space-between position-relative">
      <div class="c-step">{{ entry.id.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) }}</div>
      <img :class="entry.special ? '' : 'margin-right hidden-only-lg'" :src="entry.image" width="128"/>
      <img v-if="!entry.special" :src="entry.image" class="c-arrow-right hidden-md" width="128"/>
    </div>
    <div class="col lg-7 md-12 alignself-center no-margin-bottom-lg2">
      <h3>{{ entry.title }}</h3>
      <div>{{ entry.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurProcessLeft',
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
