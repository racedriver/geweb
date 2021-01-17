<template>
  <nuxt-content :document="article" class="col color-white"/>
</template>

<script>
export default {
  async asyncData({$content, redirect, params}) {
    let article
    try {
      article = await $content('articles/' + params.slug).fetch()
    } catch (e) {
      redirect(404, '/404')
    }
    return {
      article,
    }
  },
}
</script>

<style scoped></style>
