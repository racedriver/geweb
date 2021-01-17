<template>
  <div class="section position-relative overflow-hidden">
    <Title>Magazine</Title>
    <div class="container">
      <div class="col lg-7 block-centered md-12 text-align-center color-white">
        <h2>All articles</h2>
      </div>
    </div>
    <div class="container is-wrapping">
      <PostPreview v-for="entry in articles" :entry="entry"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, redirect, params}) {
    let articles
    try {
      articles = await $content('articles').fetch()
    } catch (e) {
      redirect(404, '/404')
    }
    console.log(articles)
    return {
      articles,
    }
  },
}
</script>

<style scoped></style>
