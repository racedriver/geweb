<template>
  <div class="w-layout-grid c-grid-services">
    <div id="message" class="shadow-2xl c-grid-services__item">
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <h2>You should go back to the home page</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>
#message {
  grid-column-start: 2;
}
</style>
