<template>
  <div class="background py-12 text-center align-center">
    <h1 class="m-0 text-white text-3xl sm:text-4xl md:text-5xl uppercase">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeadText',
  props: {
    title: String,
  },
}
</script>
