<template>
    <div class="HeaderDesktop navigation-and-offcanvas">
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

<style scoped>
.HeaderDesktop {
  margin: 48px auto;
}

.brand3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.c-nav__link {
//border-bottom: 1px solid #e0e0e0; display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: auto auto;
  padding: 16px 0;
  -webkit-transition: color 200ms ease;
  transition: color 200ms ease;
  color: #ffffff;
  font-weight: 700;
}

.c-nav__link:hover {
  color: #30C47E;
}

/*.c-nav__link.w--current {
  border-bottom: 1px solid #30C47E;
  color: #30C47E;
}
.c-nav__link.w--open:hover {
  color: #866adb;
}
.c-nav__link.w--current {
  border-bottom-style: none;
}*/
</style>
