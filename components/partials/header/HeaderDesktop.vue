<template>
  <div class="flex relative items-center mx-auto w-full max-w-7xl py-8 px-8 lg:px-16">
    <!--    <div class="absolute inset-0" v-if="this.$route.path !== '/'">
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            class="absolute inset-0 bg-green-700"
            style="mix-blend-mode: multiply"
          ></div>
        </div>-->
    <a class="relative" href="/">
      <img
        class="h-32"
        alt="Skylines One"
        src="/images/logo%20v4.1%20arrows%20only.svg"
      />
    </a>
    <nav class="grid relative grid-flow-col gap-2 justify-end mx-auto w-3/4">
      <div class="grid grid-flow-col gap-2">
        <client-only>

          <!-- Languages Start -->
          <button
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
          >
            <img class="h-14" :src="locale.icon" :alt="locale.name"/>
          </button>
          <!-- Languages End -->

          <!-- Dark mode switcher Start -->
          <button @click="switchTheme">
            <svg v-if="theme === 'dark'" class="w-12 h-12 text-yellow-200" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg v-else class="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
          <!-- Dark mode switcher End -->

        </client-only>

        <!-- Menu Start -->
        <div @blur="active = false" class="relative self-center text-left hidden md:block" >
          <button
            @click="toggle"
            :class="'flex items-center text-gray-100 hover:text-gray-200 focus:shadow-xl ' + (this.active ? 'focus:outline-white focus:text-gray-300' : '')"
            id="options-menu " aria-haspopup="true" aria-expanded="true">
            <span class="sr-only">Menu</span>
            <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <div
            v-if="this.active"
            class="bg-primary
             transition ease-out duration-100 transition ease-in duration-75 origin-top-right
             absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <nuxt-link
                v-for="(site,i) in sites"
                :to="site.link"
                :key="i"
                @click="active = false"
                class="group flex items-center px-4 py-1.5 text-lg z-30
                hover:bg-gray-100
                dark:hover:bg-gray-700"
                role="menuitem">
                <svg class="mr-2 w-8 h-8
                            text-gray-700 group-hover:text-gray-900
                            dark:text-gray-500 dark:group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="site.svg"/>
                </svg>
                <DynamicText class="inline text-gray-600 dark:group-hover:text-gray-400" :value="site.name"/>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- Menu End -->
      </div>
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
      active: false,
      theme: !process.server && window.matchMedia('(prefers-color-scheme: dark)').matches,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    switchTheme() {
      if (this.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        this.theme = 'light';
      } else {
        document.documentElement.classList.add('dark')
        this.theme = 'dark'
      }
    },
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
