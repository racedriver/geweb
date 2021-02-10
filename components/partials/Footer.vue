<template>
  <footer class="py-12 px-6 text-primary bg-gray-100 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl divide-y divide-gray-600 divide-opacity-60 test1">
      <div class="pb-4 lg:flex">
        <div>
          <!--  Footer Logo Start -->
          <div class="flex">
            <img
              alt="Skylines One"
              src="/images/logo%20v4.1%20arrows%20only.svg"
              width="100"
              height="120"
            />
            <DynamicText
              class="self-center ml-6 font-mono text-4xl font-thin tracking-tighter text-green-500 sm:text-5xl lg:w-96 xl:w-80"
              :value="this.name"
            />
          </div>
          <DynamicText class="text-xs font-medium tracking-wider uppercase" :value="this.subtitle"/>
          <!--  Footer Logo End -->
          <!-- Languages Start -->
          <button
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            class="inline-block pr-4"
          >
            <img :src="locale.icon" :alt="locale.name" />
          </button>
          <!-- Languages End -->
        </div>
        <!-- Link Block Start -->
        <div class="">
          <DynamicText class="mb-4 text-3xl font-extralight tracking-tight md:text-4xl" :value="this.title"/>
          <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-4 xl:gap-8">
            <div v-for="(entry, i) in this.linkBlock" :key="i">
              <DynamicText class="mb-3 font-black text-gray-900 lg:mb-6" :value="entry.title"/>
              <DynamicText class="col-span-1 text-gray-800" :value="entry.rows" />
            </div>
          </div>
        </div>
        <!-- Link Block End -->
      </div>
      <!-- Footer Bottom End -->
      <div class="flex justify-between pt-4 text-gray-800">
        <DynamicText
          :value="entity"
          v-for="(entity, i) in this.bottom"
          :key="i"
        />
      </div>
      <!-- Footer Bottom End -->
    </div>
  </footer>
</template>

<script>
import data from '/static/data/footer'
export default {
  name: 'Footer',
  data() {
    return data
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
