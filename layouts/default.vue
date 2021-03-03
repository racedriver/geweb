<template>
  <div>
    <!--    <hide-for-bots>-->
    <Background />
    <!--    </hide-for-bots>-->
    <Header />
<!--    <hide-for-bots :invert=true>-->
<!--      <ol>-->
<!--        <li>Kotlin</li>-->
<!--        <li>Google Cloud</li>-->
<!--        <li>Firebase</li>-->
<!--        <li>Serverless</li>-->
<!--        <li>RavenDB</li>-->
<!--        <li>Kotlin</li>-->
<!--        <li>Nuxt.js</li>-->
<!--        <li>Vue.js 2</li>-->
<!--        <li>Marketplace building</li>-->
<!--        <li>Custom software development agency</li>-->
<!--      </ol>-->
<!--    </hide-for-bots>-->
    <Nuxt />
    <Footer>
      <iframe src="https://www.videoask.com/fxz4ou4o3"
      allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
      width="100%"
      height="600px"
      style="border: none; border-radius: 24px"
      >
      </iframe>
    </Footer>
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
