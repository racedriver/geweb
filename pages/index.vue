<template>
  <div>
    <FirstImpression />
    <WhoWeAre />
    <NewestTechnologies />
    <WhatWeDo />
    <!--    <ReadyBanner/>-->
    <OurProcess />
    <!--    <div style="padding: 100px 0" />-->
    <div>
      <Title class="pt-16 pb-4">Magazine</Title>
      <Magazine class="py-12" :articles="this.articles" />
    </div>
    <Testimonials />
    <!--    <div style="padding: 100px 0" />-->
    <!--   Partners/>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
})
</script>
