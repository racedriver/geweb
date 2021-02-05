<template>
  <div class="background py-12 text-center align-center">
    <h1 class="m-0 text-white">{{ title }}</h1>
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
