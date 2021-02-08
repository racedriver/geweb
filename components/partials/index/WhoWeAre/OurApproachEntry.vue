<template>
  <div class="col xs-12 md-6">
    <img :src="entry.image" class="mb-8 lg:mb-12 our-approach"/>
    <h4> {{ entry.title }}</h4>
    <span>{{ entry.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'OurApproachEntry',
  props: {
    entry: {
      image: String,
      title: String,
      text: String,
    }
  }
}
</script>

<style scoped></style>
