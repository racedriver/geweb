<template>
  <div id="mobile-navigation" class="md:hidden">
    <div :class="'menu text-black '+activated">
      <nav class="menu__nav ">
        <ul class="menu__list r-list text-white">
          <li v-for="site in sites" class="menu__group">
            <a :href="site.link" class="menu__link r-link">{{ site.name }}</a>
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
      activated: undefined,
      menuOpenedText : 'Open menu',
      menuClosedText : 'Close menu',
    }
  },
  computed: {
    menuText() {
      return this.activated ? this.menuOpenedText : this.menuClosedText;
    }
  },
  methods: {
    toggle(){
      if(this.activated) this.activated = null; else this.activated ="menu_activated"
    }
  }
}
</script>
