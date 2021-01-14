<template>
  <div>
    <div class="navigation-overlay"></div>
    <div class="navigation-and-offcanvas">
      <div class="col lg-2 no-margin-bottom-lg md-basis-auto">
        <a class="brand3 w-inline-block" href="/">
          <img
            alt="Skylines One"
            src="/images/logo%20v4.1%20arrows%20only.svg"
          />
        </a>
      </div>
      <div class="col lg-8 no-margin-bottom md-basis-auto md-order-last">
        <nav class="navigation-menu flexh-justify-center position-relative">
          <a v-for="site in sites" :href="site.link" class="c-nav__link">
            {{ site.name }}
          </a>
        </nav>
      </div>
      <a class="c-navbar-icon is-19px" href="#"></a>
    </div>
    <div class="mobile-navigation-bar margin-top">
      <a class="brand-2 w-inline-block" href="/">
        <img
          alt=""
          class="logo-image-2"
          height="100"
          src="/images/logo%20v4.1%20arrows%20only.svg"
        />
      </a>
    </div>
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
}
</script>

<style scoped></style>
