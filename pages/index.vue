<template>
  <div>
    <FirstImpression />
    <WhoWeAre />
    <NewestTechnologies />
    <WhatWeDo />
    <OurProcess />
    <div class="pt-16 pb-24">
      <Title class="pb-12">Magazine</Title>
      <Magazine :articles="this.articles" />
    </div>
    <Testimonials />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, redirect, params }) {
    let articles
    try {
      articles = await $content('articles').limit(3).fetch()
    } catch (e) {
      redirect(404, '/404')
    }
    return {
      articles,
    }
  },
}
</script>
