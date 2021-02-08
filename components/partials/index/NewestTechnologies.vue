<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-black bg-opacity-25">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-500 place-self-center text-center lg:max-w-xl lg:text-left 2xl:text-center">
          <DynamicText :value="this.title"/>
        </h2>
        <div class="pt-10 lg:hidden"/>
        <div class="flow-root self-center">
          <div class="flex flex-wrap lg:flex-nowrap justify-between justify-around">
            <div v-for="(entry, i) in this.entries" :key="i">
              <img class="h-24 sm:h-32 md:h-40 lg:h-32" :src="entry.image" :alt="entry.alt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "/static/data/new-technologies"
export default {
name: "NewestTechnologies",
  data() {
    return data
  }
}
</script>
