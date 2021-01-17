<!--suppress HtmlRequiredAltAttribute, JSUnresolvedVariable -->
<template>
  <div class="dark-box" style="padding: 0 10%">
    <div class="section color-white">
      <small class="margin-bottom" style="color: gray">
        {{ new Date(Date.parse(article.createdAt)).toISOString().slice(0, 10) }}
      </small>

      <h1 class="underline">{{ article.title }}</h1>
      <p class="margin-bottom">{{ article.short }}</p>

      <div class="wrapper-21to9 margin-bottom">
        <img :src="article.thumbnail"/>
      </div>

      <nuxt-content :document="article"/>
    </div>
  </div>
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

<style lang="scss" scoped>
h1 {
  text-decoration-color: #2e8662;
}
</style>
