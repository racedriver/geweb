<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-black bg-opacity-25">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <h2 class="max-w-md mx-auto text-3xl sm:text-4xl font-extrabold text-green-500 place-self-center text-center lg:max-w-xl lg:text-left">
          <DynamicText :text="this.title"/>
        </h2>
        <div class="pt-10"/>
        <div class="flow-root self-center">
          <div class="flex flex-wrap justify-between sm:justify-around">
            <div v-for="(entry, i) in this.entries" :key="i">
              <img class="h-24 sm:h-26 md:h-48" :src="entry.image" :alt="entry.alt">
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
