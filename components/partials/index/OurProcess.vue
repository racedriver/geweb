<template>
  <div class="section position-relative overflow-hidden no-padding-bottom">
    <Title>our process</Title>
    <div class="container margin-bottom">
      <div class="col text-align-center block-centered lg-8 md-12">
        <div class="text-medium-white margin-top">
          <h2>Software Development Life Cycle</h2>
        </div>
      </div>
    </div>
    <template v-for="(process, index) in processes">
      <OurProcessLeft
        v-if="index % 2 === 0"
        :entry="{
          id: index + 1,
          special: index === processes.length - 1,
          ...process,
        }"
      />
      <OurProcessRight
        v-if="index % 2 === 1"
        :entry="{
          id: index + 1,
          special: index === processes.length - 1,
          ...process,
        }"
      />
    </template>
  </div>
</template>

<script>
import data from "/static/data/our-process"
export default {
  name: 'OurProcess',
  data() {
    return data
  },
}
</script>

<style scoped></style>
