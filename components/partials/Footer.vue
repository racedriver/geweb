<template>
  <footer class="text-black py-12 px-6 bg-gray-100">
    <div class="max-w-7xl mx-auto divide-y divide-gray-600 divide-opacity-60">
      <div class="lg:flex pb-4">
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
              class="ml-6 text-4xl sm:text-5xl font-thin tracking-tighter self-center lg:w-96 xl:w-80 text-green-500"
              :value="this.name"
            />
          </div>
          <DynamicText class="tracking-wider text-xs font-medium uppercase" :value="this.subtitle"/>
          <!--  Footer Logo End -->
          <!-- Languages Start -->
          <a
            href="#"
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            class="inline-block pr-4"
          >
            <img :src="locale.icon" :alt="locale.name" />
          </a>
          <!-- Languages End -->
        </div>
        <!-- Link Block Start -->
        <div class="">
          <DynamicText class="text-3xl md:text-4xl font-extralight tracking-tight mb-4" :value="this.title"/>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4 xl:gap-8 ">
            <div v-for="(entry, i) in this.linkBlock" :key="i">
              <DynamicText class="font-black mb-3 lg:mb-6 text-gray-900" :value="entry.title"/>
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
