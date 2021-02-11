<template>
  <section class="bg-primary p-24 text-center">
    <Title :value="title"/>
    <DynamicText class="text-gradient-primary text-xl-dynamic font-bold py-8" :value="subtitle"/>
    <div class="max-w-3xl mx-auto flex justify-center cursor-pointer">
      <DynamicText
        class="group text-white p-8 bg-green-500 rounded text-lg-dynamic bg-clip-border
             hover:outline-black dark:hover:outline-white hover:no-underline hover:bg-black font-bold hover:text-gradient-secondary"
        subClass=""
        :value="{href: '/consultation', text: button}"/>
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
