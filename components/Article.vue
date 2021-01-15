<template>
  <nuxt-content :document="page" class="col color-white"/>
</template>

<script>
export default {
  name: 'Article',
  // data() {
  //   return {
  //     page: "# Hello"
  //   }
  // },
  props: {
    page: Object,
  },
}
</script>
