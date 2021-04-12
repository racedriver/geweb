<template>
  <div class="">
    <HeadText title="Magazine"/>
    <Magazine class="py-12" :articles="this.articles" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Magazines',
    script:[
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org/",
          "@type": "WebPage",
          "mainContentOfPage": {
            "about": "Magazines from SkyLines One"
          }
        }
      },
    ],
  },
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
