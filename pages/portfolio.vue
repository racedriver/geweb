<template>
  <div class="text-white">
    <HeadText title="Portfolio" />
    <div class="grid my-20 mx-auto w-full max-w-7xl lg:grid-cols-3 lg:gap-8">
      <nuxt-link
        class="inline-block overflow-hidden relative bg-transparent rounded no-underline"
        :to="entry.link"
        v-for="(entry, i) in this.entries"
        :key="i"
      >
        <div class="group hover:bg-black text-black flex justify-center h-56">
          <div
            class=" group-hover:shadow-lg
             bg-contain
             group-hover:bg-black group-hover:filter-brightness-25 absolute inset-0"
            :style="{ backgroundImage: `url('${entry.image}')` }"
          >
          </div>
          <p class="self-center flex text-3xl group-hover:text-white group-hover:z-10 text-center">
            {{ entry.description1 }} - {{ entry.description2 }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import data from '/static/data/portfolio'
export default {
  name: 'portfolio',
  data() {
    return data
  },
}
</script>
