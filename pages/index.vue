<template>
  <div>
    <FirstImpression/>
    <WhoWeAre/>
    <NewestTechnologies/>
    <WhatWeDo/>
    <ReadyBanner/>
    <OurProcess/>
    <!--    <div style="padding: 100px 0" />-->
    <Magazine :articles="this.articles"/>
    <Testimonials/>
    <!--    <div style="padding: 100px 0" />-->
    <!--   Partners/>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
})
</script>
