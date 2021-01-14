<template>
  <a :href="site.link" class="footer-nav-link on-dark w-inline-block">
    <span v-if="site.icon !== undefined" class="fa-brand-2 w24">{{ site.icon }}</span> {{ site.name }}
  </a>
</template>

<script>
export default {
  name: 'OtherSiteLink',
  props: {
    site: {
      link: String,
      icon: String,
      name: String,
    }
  },
}
</script>

<style scoped></style>
