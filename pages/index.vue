<template>
  <main>
    <FirstImpression class="mt-4"/>
    <Consultation/>
    <NewestTechnologies/>
    <WhatWeDo/>
    <OurProcess/>
    <div class="pt-16 pb-24">
      <Title class="pb-12" :value="magazine.title"/>
      <Magazine :articles="this.articles"/>
    </div>
    <Testimonials/>
  </main>
</template>

<script>
import data from "/static/data"

export default {
  data() {
    return data.index
  },
  async asyncData({$content, redirect, params}) {
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
