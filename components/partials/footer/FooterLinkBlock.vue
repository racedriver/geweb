<template>
  <div class="col xs-12 sm-6 md-6 lg-3 no-margin-bottom-lg">
    <div class="size-h4 margin-bottom">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FooterLinkBlock",
  props: {
    title: String,
  }
}
</script>

<style scoped>

</style>
