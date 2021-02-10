<template>
  <div>
    <section class="overflow-hidden bg-primary">
      <Title class="mt-8" :value="title"/>
      <div
        class="relative py-12 mx-4 sm:mx-auto max-w-7xl"
        v-for="(entry, i) in this.entries"
        :key="i"
      >
        <div class="relative lg:flex lg:items-center">
          <div class="hidden lg:block lg:flex-shrink-0">
            <img
              class="object-cover w-64 h-64 rounded-full xl:h-80 xl:w-80"
              :src="entry.image"
              alt=""
            />
          </div>

          <div class="relative mx-4 sm:mx-10 lg:mr-0">
            <svg
              class="absolute top-0 right-0 w-36 h-36 text-gray-400 opacity-50 transform-gpu rotate-6 -translate-y-24 dark:text-gray-700"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                stroke-width="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote class="relative">
              <p class="">
              <span class="bg-white">
                <DynamicText class="text-xl font-bold md:text-4xl text-gradient-primary" :value="entry.title"/>
              </span>
                <DynamicText
                  class="max-w-3xl font-mono text-xl italic font-medium text-gray-700 md:text-2xl dark:text-gray-100"
                  :value="entry.text"/>
              </p>
              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 lg:hidden">
                    <img
                      class="object-cover w-12 h-12 rounded-full"
                      :src="entry.image"
                      alt=""
                    />
                  </div>
                  <div class="ml-4 lg:ml-0">
                    <DynamicText class="text-lg font-medium text-gray-600 dark:text-gray-400" :value="entry.name"/>
                    <div class="text-lg font-medium text-green-500 dark:text-green-500">
                      <DynamicText class="inline" :value="entry.position"/><!--
                   --><span class="inline text-gray-600 dark:text-gray-400">, </span>
                      <DynamicText class="inline" :value="entry.company"/>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '/static/data/testimonials'

export default {
  name: 'Testimonials',
  data() {
    return data
  },
}
</script>
