<template>
  <div id="mobile-navigation" class="md:hidden">
    <div class="menu text-black">
      <nav class="menu__nav">
        <ul class="menu__list r-list text-white">
          <li v-for="site in sites" class="menu__group">
            <a :href="site.link" class="menu__link r-link">{{ site.name }}</a>
          </li>
        </ul>
      </nav>
      <button class="menu__toggle r-button" type="button">
        <span class="menu__hamburger m-hamburger">
          <span class="m-hamburger__label">
            <span class="menu__screen-reader screen-reader">Open menu</span>
          </span>
        </span>
      </button>
    </div>
    <script type="text/javascript" src="/js/mobile-menu.js"/>
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
}
</script>
