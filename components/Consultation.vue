<template>
  <section class="bg-primary py-24  text-center">
    <Title class="px-1 sm:px-6-dynamic" subClass="overflow-visible" :value="title"/>
    <DynamicText class="text-gradient-primary text-xl-dynamic font-bold py-2-dynamic" :value="subtitle"/>
    <div class="mx-auto flex justify-center cursor-pointer px-6-dynamic">
      <DynamicText
        class="group text-white px-2-dynamic py-4-dynamic bg-green-500 rounded text-lg-dynamic bg-clip-border
             hover:outline-black dark:hover:outline-white hover:no-underline hover:bg-black font-bold hover:text-gradient-secondary"
        subClass=""
        :value="{href: '/contact-us', text: button}"/>
    </div>
  </section>
</template>

<script>
import data from "/static/data/consultation"

export default {
  data() {
    return data
  }
}
</script>
