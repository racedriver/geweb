<!--suppress HtmlRequiredAltAttribute, JSUnresolvedVariable -->
<template>
  <div>
    <HeadText title="Magazine" />
    <div class="bg--dark py-16 px-12">
      <div class="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div class="text-white block">
          <small class="mb-6 text-gray-700">
            {{
              new Date(Date.parse(article.createdAt)).toISOString().slice(0, 10)
            }}
          </small>

          <h1 class="text-green-500 underline"><span class="text-white">{{ article.title }}</span></h1>
          <p class="mb-6">{{ article.short }}</p>

          <div class="wrapper-21to9 mb-6">
            <img :src="article.thumbnail" />
          </div>

          <nuxt-content
            class="whitespace-pre-line text-xl"
            :document="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, redirect, params }) {
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
