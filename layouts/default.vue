<template>
  <div>
    <Header />
    <hide-for-bots :invert=true>
      <ol>
        <li>Kotlin</li>
        <li>Google Cloud</li>
        <li>Firebase</li>
        <li>Serverless</li>
        <li>RavenDB</li>
        <li>Kotlin</li>
        <li>Nuxt.js</li>
        <li>Vue.js 2</li>
        <li>Marketplace building</li>
        <li>Custom software development agency</li>
      </ol>
    </hide-for-bots>
    <hide-for-bots>
      <Background />
    </hide-for-bots>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import VueIfBot from '@/plugins/vue-if-bot'

export default {
  components: {
    HideForBots: VueIfBot
  }
}
</script>
