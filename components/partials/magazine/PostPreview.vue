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
        <h3 class="text-white mb-4">{{ entry.title }}</h3>
      </a>
      <div class="text-gray-400 mb-4">
        {{ entry.short }}
      </div>
      <a :href="url" class="text-green-500 font-normal">
       Read more
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
