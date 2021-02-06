<template>
  <div class="py-12">
    <Title class="mb-12">Magazine</Title>
<!--    <div class="container">-->
<!--      <div class="col lg-7 block-centered md-12 text-align-center">-->
<!--        <h2 class="text-white">All articles</h2>-->
<!--      </div>-->
<!--    </div>-->
    <div class="grid lg:grid-cols-3 gap-10 mx-8 sm:gap-12 sm:mx-12 xl:mx-16 xl:max-w-7xl xl:mx-auto items-stretch">
      <PostPreview class="grid-cols-1" v-for="(entry, i) in articles" :entry="entry" :key="i" />
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
