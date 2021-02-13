<template>
  <div id="mobile-navigation" class="md:hidden">
    <div :class="'menu text-black '+activated">
      <nav class="menu__nav ">
        <ul class="menu__list r-list text-white">
          <li v-for="site in [homePath, ...sites]" class="menu__group">
            <a :href="site.link" class="menu__link r-link">
              <svg class="mr-2 w-8 h-8 items-center self-center text-gray-50 " xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="site.svg"/>
              </svg>
              <span class="text-gray-200">{{ site.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <button class="menu__toggle r-button" type="button" @click.prevent="toggle">
        <span class="menu__hamburger m-hamburger">
          <span class="m-hamburger__label">
            <span class="menu__screen-reader screen-reader">{{ menuText }}</span>
          </span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  props: {
    sites: {
      name: String,
      link: String,
    },
  },
  data() {
    return {
      homePath: {
        name: 'Home',
        link: '/',
        svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
      },
      activated: undefined,
      menuOpenedText: 'Open menu',
      menuClosedText: 'Close menu',
    }
  },
  computed: {
    menuText() {
      return this.activated ? this.menuOpenedText : this.menuClosedText;
    }
  },
  methods: {
    toggle() {
      if (this.activated) this.activated = null; else this.activated = "menu_activated"
    }
  }
}
</script>
