<template>
  <div class="section position-relative overflow-hidden">
    <Title class="mb-12">Magazine</Title>
<!--    <div class="container">-->
<!--      <div class="col lg-7 block-centered md-12 text-align-center">-->
<!--        <h2 class="text-white">All articles</h2>-->
<!--      </div>-->
<!--    </div>-->
    <div class="container flex flex-wrap">
      <PostPreview class="sm:mx-8 sm:my-6" v-for="(entry, i) in articles" :entry="entry" :key="i" />
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
