<!--suppress HtmlRequiredAltAttribute, JSUnresolvedVariable -->
<template>
  <main>
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
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title,
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org/",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://skylines.one/magazine",
            },
            "image": this.article.thumbnail,
            "headline": this.article.title,
            "dateCreated": this.article.createdAt,
            "dateModified": this.article.updatedAt,
            "text": this.article.text,
          }
        }
      ],
      meta: [
        {
          property: "og:title",
          content: this.article.title,
        },
        {
          property: "og:type",
          content: "video.movie"
        },
        {
          property: "og:image",
          content: this.article.thumbnail,
        },
        {
          property: "og:description",
          content: this.article.short,
        },
        {
          property: "og:video",
          content: this.article.video,
        },
      ]
    }
  },
  async asyncData({ $content, redirect, params }) {
    let article
    try {
      const content = $content('articles/' + params.slug, {text:true});
      article = await content.fetch()
    } catch (e) {
      redirect(404, '/404')
    }
    return {
      article,
    }
  },
}
</script>
