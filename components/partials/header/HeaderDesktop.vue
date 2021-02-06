<template>
  <div class="max-w-7xl mx-auto w-full flex items-center relative">
<!--    <div class="absolute inset-0" v-if="this.$route.path !== '/'">-->
<!--      <img-->
<!--        class="h-full w-full object-cover"-->
<!--        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"-->
<!--        alt="People working on laptops"-->
<!--      />-->
<!--      <div-->
<!--        class="absolute inset-0 bg-green-700"-->
<!--        style="mix-blend-mode: multiply"-->
<!--      ></div>-->
<!--    </div>-->
    <a class="relative my-8 ml-8 lg:ml-16" href="/">
      <img
        class="h-32"
        alt="Skylines One"
        src="/images/logo%20v4.1%20arrows%20only.svg"
      />
    </a>
    <nav class="hidden w-full md:flex md:w-3/4 lg:mx-auto justify-around relative">
      <a
        v-for="site in sites"
        :href="site.link"
        class="flex m-auto py-4 font-bold text-white text-xl lg:text-2xl xl:text-3xl hover:text-green-300"
      >
        {{ site.name }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderDesktop',
  props: {
    sites: {
      name: String,
      link: String,
    },
  },
}
</script>
