<template>
  <div class="section position-relative overflow-hidden">
    <Title>Magazine</Title>
    <div class="container">
      <div class="col lg-7 block-centered md-12 text-align-center text-white">
        <h2>All articles</h2>
      </div>
    </div>
    <div class="container is-wrapping">
      <PostPreview v-for="(entry, i) in articles" :entry="entry" :key="i" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Magazine',
  props: {
    articles: Array,
  },
}
</script>

<style scoped></style>
