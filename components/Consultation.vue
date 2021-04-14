<template>
  <section class="py-24 text-center bg-primary brightness-75">
      <Title class="px-1 mx-auto sm:px-4-dynamic max-w-1600" :value="title"/>
      <DynamicText class="z-10 font-bold text-gradient-primary text-xl-dynamic py-2-dynamic" :value="subtitle"/>
      <div class="flex justify-center mx-auto cursor-pointer px-6-dynamic">
        <DynamicText
          class="group text-white px-12-dynamic py-6-dynamic bg-gradient-primary rounded text-lg-dynamic bg-clip-border
             hover:outline-black dark:hover:outline-white hover:no-underline hover:bg-black font-bold hover:text-gradient-primary"
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
