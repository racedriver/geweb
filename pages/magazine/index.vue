<template>
  <Magazine :articles="articles" />
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
