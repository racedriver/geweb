<template>
  <div class="Title">
    <div class="c-shadowing-text is-white" style="color: #30c47e">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style scoped>
.Title {
  margin-top: 48px;
}
</style>
