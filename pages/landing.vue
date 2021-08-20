<template>
  <main class="">
    <h1 class="lg:hidden px-4-dynamic py-4-dynamic  bg-primary   dark:text-gray-100 lg:rounded ">
      <DynamicText class="text-xl font-semibold md:font-bold" :value="title"/>
    </h1>
    <ContactForm class="">
      <div class="hidden lg:flex h-full justify-center items-center  ">
        <h1 class="px-4-dynamic py-4-dynamic  bg-primary   dark:text-gray-100 lg:rounded ">
          <DynamicText class="text-xl font-semibold md:font-bold" :value="title"/>
        </h1>
      </div>
    </ContactForm>
    <NewestTechnologies/>
    <Testimonials/>
  </main>
</template>

<script>
export default {
  name: "landing",
  head: {
    title: 'Landing'
  },
  data() {
    return this.$t("landing");
  }
}
</script>
