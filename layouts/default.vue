<template>
  <div>
    <Background />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
// import VueIfBot from '@/plugins/vue-if-bot'

export default {
  head () {
    return this.$nuxtI18nHead()
  },
  // components: {
  //   HideForBots: VueIfBot
  // }
}
</script>
