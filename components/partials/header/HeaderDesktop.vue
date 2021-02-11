<template>
  <div class="max-w-7xl mx-auto w-full flex items-center relative">
    <!--    <div class="absolute inset-0" v-if="this.$route.path !== '/'">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            class="absolute inset-0 bg-green-700"
            style="mix-blend-mode: multiply"
          ></div>
        </div>-->
    <a class="relative my-8 ml-8 lg:ml-16" href="/">
      <img
        class="h-32"
        alt="Skylines One"
        src="/images/logo%20v4.1%20arrows%20only.svg"
      />
    </a>
    <nav class="hidden w-full md:flex md:w-3/4 lg:mx-auto justify-around relative">
      <a
        v-for="site in sites"
        :href="site.link"
        class="flex m-auto py-4 font-bold text-white text-xl lg:text-2xl xl:text-3xl hover:text-green-300"
      >
        {{ site.name }}
      </a>
      <client-only>
        <!-- Languages Start -->
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click.prevent.stop="$i18n.setLocale(locale.code)"
          class="inline-block px-3"
        >
          <img class="h-12" :src="locale.icon" :alt="locale.name" />
        </button>
        <!-- Languages End -->
        <button @click="switchTheme" >
          <svg v-if="theme === 'dark'" class="h-12 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else class="h-12 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
      </client-only>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderDesktop',
  props: {
    sites: {
      name: String,
      link: String,
    },
  },
  data() {
    return {
      theme: !process.server && window.matchMedia('(prefers-color-scheme: dark)').matches,
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    switchTheme() {
      if (this.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        this.theme = 'light';
      }   else  {
        document.documentElement.classList.add('dark')
        this.theme = 'dark'
      }
    }
  }
}
</script>
