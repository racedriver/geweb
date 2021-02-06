<template>
    <div class="grid lg:grid-cols-3 gap-10 mx-8 sm:gap-12 sm:mx-12 xl:mx-16 xl:max-w-7xl xl:mx-auto items-stretch">
      <div class="grid-cols-1 pop-out-default" v-for="(entry, i) in articles" :entry="entry" :key="i" >
        <a :href="/magazine/ + entry.slug" class="inline-block w-full wrapper-16to9">
          <img :src="entry.thumbnail"/>
        </a>
        <!--    <div class="c-gridpost__category">-->
        <!--      <a href="#">Design</a> / <a href="#">Technology</a>-->
        <!--    </div>-->
        <div class="dark-box h-full">
          <a :href="url" class="c-gridpost__title-2 inline-block max-w-full">
            <h3 class="text-white mb-4">{{ entry.title }}</h3>
          </a>
          <div class="text-gray-400 mb-4">
            {{ entry.short }}
          </div>
          <a :href="/magazine/ + entry.slug" class="text-green-500 font-normal">
            Read more
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Magazine',
  props: {
    articles: Array,
  },
}
</script>
