<template>
  <div class="col xs-12 md-6">
    <img :src="entry.image" class="margin-bottom-double our-approach"/>
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
