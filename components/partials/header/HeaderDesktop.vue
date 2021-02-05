<template>
    <div class="w-full relative flex justify-center items-center">
      <div class="absolute inset-0" v-if="this.$route.path !== '/'">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
        <div class="absolute inset-0 bg-green-700" style="mix-blend-mode: multiply;"></div>
      </div>
        <a class="relative my-8" href="/">
          <img
            class="h-32"
            alt="Skylines One"
            src="/images/logo%20v4.1%20arrows%20only.svg"
          />
        </a>
      <div class="col lg-8 no-margin-bottom md-basis-auto md-order-last">
        <nav class="navigation-menu flex justify-center position-relative">
          <a v-for="site in sites" :href="site.link" class="flex m-auto py-4 font-bold text-white hover:text-green-300">
            {{ site.name }}
          </a>
        </nav>
      </div>
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
