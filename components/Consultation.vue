<template>
  <section class="relative py-24 text-center brightness-75">
    <Title class="px-1 sm:px-6-dynamic 2xl:max-w-7xl mx-auto z-10" subClass="overflow-visible" :value="title"/>
    <DynamicText class="text-gradient-primary text-xl-dynamic font-bold py-2-dynamic  z-10" :value="subtitle"/>
    <ExplainerVideo class="absolute inset-0  z-10"/>
    <div class="mx-auto flex justify-center cursor-pointer px-6-dynamic py-4-dynamic  z-10">
      <DynamicText
        class="group text-white px-10-dynamic py-6-dynamic bg-gradient-primary rounded text-lg-dynamic bg-clip-border
             hover:outline-black dark:hover:outline-white hover:no-underline hover:bg-black font-bold hover:text-gradient-secondary"
        subClass=""
        :value="{href: '/contact-us', text: button}"/>
    </div>
  </section>
</template>

<script>
import data from "/static/data"

export default {
  data() {
    return data.consultation
  }
}
</script>
