<template>
  <div class="text-white">
    <HeadText title="Portfolio" />
    <main class="grid my-20 w-full max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-8 px-4-dynamic mx-auto">
      <nuxt-link
        class="inline-block relative bg-transparent no-underline aspect-w-16 aspect-h-9 "
        :to="entry.link"
        v-for="(entry, i) in this.entries"
        :key="i"
      >
        <div class="group hover:bg-black text-black flex justify-center rounded">
          <div
            class=" group-hover:shadow-lg rounded
             bg-cover
             group-hover:bg-black group-hover:filter-brightness-25 absolute inset-0"
            :style="{ backgroundImage: `url('${entry.image}')` }"
          >
          </div>
          <p class="self-center flex text-3xl group-hover:text-white group-hover:z-10 text-center">
            {{ entry.description1 }} - {{ entry.description2 }}
          </p>
        </div>
      </nuxt-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  head: {
    title: 'Portfolio'
  },
  data() {
    return this.$t("portfolio")
  },
}
</script>
