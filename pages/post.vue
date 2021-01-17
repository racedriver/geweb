<template>
  <Article :page="page"/>
</template>

<script>
export default {
  name: 'post',
  async asyncData({$content}) {
    const page = await $content('first').fetch()

    return {
      page
    }
  }
}
</script>

<style scoped></style>
