<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div class="PostPreview col lg-4 md-12 pop-out-default">
    <a :href="url" class="w-inline-block wrapper-16to9">
      <img :src="entry.thumbnail"/>
    </a>
    <!--    <div class="c-gridpost__category">-->
    <!--      <a href="#">Design</a> / <a href="#">Technology</a>-->
    <!--    </div>-->
    <div class="dark-box">
      <a :href="url" class="c-gridpost__title-2 w-inline-block">
        <h3 class="text-white">{{ entry.title }}</h3>
      </a>
      <div class="margin-bottom text-white">
        {{ entry.short }}
      </div>
      <a :href="url" class="cta-link-2">
        <span class="margin-right">Read more</span>
        <!--      <span class="fa c-cta1_arrow-hovered"></span>-->
        <!--      <span class="fa c-cta1__arrow-normal"></span>-->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    entry: {
      thumbnail: String,
      title: String,
      short: String,
      slug: String,
    },
  },
  data() {
    return {
      url: /magazine/ + this.entry.slug,
    }
  },
}
</script>

<style scoped></style>
