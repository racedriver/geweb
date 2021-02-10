<template>
    <div class="grid lg:grid-cols-3 gap-10 mx-8 sm:gap-12 sm:mx-12 xl:mx-16 xl:max-w-7xl xl:mx-auto items-stretch">
      <div class="grid-cols-1 pop-out-default" v-for="(entry, i) in articles" :entry="entry" :key="i" >
        <a :href="url(entry)" class="inline-block w-full wrapper-16to9">
          <img :src="entry.thumbnail"/>
        </a>
        <!--    <div class="c-gridpost__category">-->
        <!--      <a href="#">Design</a> / <a href="#">Technology</a>-->
        <!--    </div>-->
        <div class="bg-primary py-16 px-12 h-full">
          <a :href="url(entry)" class="text-gray-700 inline-block">
            <h3 class="text-white mb-4">{{ entry.title }}</h3>
          </a>
          <div class="text-gray-400 mb-4">
            {{ entry.short }}
          </div>
          <a :href="url(entry)" class="text-green-500 font-normal">
            <DynamicText :value="readMore" />
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import data from "/static/data/magazine"
export default {
  name: 'Magazine',
  props: {
    articles: Array,
  },
  data() {
    return data
  },
  methods: {
    url: (entry) => /magazine/ + entry.slug
  }
}
</script>
