<template>
  <div class="bg-transparent relative overflow-hidden">
    <div class="py-16">
      <Title :value="title" class="max-w-7.25xl flex mx-auto"/>
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 text-center">
        <DynamicText :value="subtitle"/>
      </h2>
    </div>
    <OurProcessEntity
      v-for="(process, index) in processes"
      :key="index"
      :entry="{
          id: index + 1,
          special: index === processes.length - 1,
          ...process,
          revert: index % 2 === 1
        }"
    />
  </div>
</template>

<script>
export default {
  name: 'OurProcess',
  data() {
    return this.$t("OurProcess")
  },
}
</script>
