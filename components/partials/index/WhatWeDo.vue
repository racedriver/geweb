<template>
    <div class="relative bg-primary py-16 sm:py-24 lg:py-32" style="clip-path: polygon(100% 0%, 0 0%, 0% 100%, 100% 95%);">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 md:max-w-7xl"
      >
        <DynamicText class="text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl"
                     :value="title"/>
        <DynamicText class="mt-5 max-w-prose mx-auto text-xl text-gray-500" :value="text"/>
        <div class="mt-12">
          <div
            class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch items-stretch"
          >
            <div class="my-4" v-for="(entry, i) in this.entries" :key="i">
              <div class="bg-primary pt-12"/>
              <div class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-4">
                <div class="-mt-12 h-full">
                  <div>
                  <span
                    class="inline-flex items-center justify-center p-3 bg-green-500 dark:bg-green-700 rounded-md shadow-lg"
                  >
                    <svg
                      v-if="entry.svg"
                      class="h-24 text-white dark:text-gray-100"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        :d="entry.svg"
                      />
                    </svg>
                    <img v-else class="h-24" :src="entry.image"/>
                  </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium text-gray-900 dark:text-gray-50 tracking-tight"
                  >
                    {{ entry.title }}
                  </h3>
                  <p
                    class="mt-5 text-base text-gray-500 dark:text-gray-400 self-center flex my-auto"
                  >
                    {{ entry.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import data from '/static/data/what-we-do'

export default {
  name: 'WhatWeDo',
  data() {
    return data
  },
}
</script>
