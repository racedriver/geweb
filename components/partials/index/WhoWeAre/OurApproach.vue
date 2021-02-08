<template>
  <div class="col lg-6 md-12">
    <div class="pre-title mb-8 lg:mb-12">Our approach</div>
    <div class="z-10 flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto w-auto min-w-full -mx-6 self-center">
      <OurApproachEntry v-for="(entry, i) in entries" :entry="entry" :key="i"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurApproach',
  data() {
    return {
      entries: [
        {
          image: '/images/user-centered.jpeg',
          title: 'User Centered',
          text:
            'User experience is the most vital part in business - our promise\n' +
            'is to provide user experience on an entirely new level.',
        },
        {
          image: '/images/cloud%20computing.png',
          title: 'Cloud First',
          text:
            'Save money on software, platforms, and infrastructure by moving\n' +
            'your applications to the cloud.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
