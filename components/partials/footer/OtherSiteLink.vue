<template>
  <a :href="site.link" class="block py-1 transition max-w-full">
    <span v-if="site.icon !== undefined" class="fa-brand-2 text-center">{{ site.icon }}</span> {{ site.name }}
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
