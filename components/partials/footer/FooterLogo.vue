<template>
  <div class="col lg-3 flexv-space-between xl-12">
    <img alt="" src="/images/logo2.png" width="400" />
    <div class="footer-tagline">.love the hustle</div>
    <div style="display: inline-block">
      <a
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
        style="padding-right: 20px"
      >
        <img :src="locale.icon" :alt="locale.name" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLogo',
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>

<style scoped></style>
