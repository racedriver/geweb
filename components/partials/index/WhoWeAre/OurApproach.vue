<template>
  <div class="col lg-6 md-12">
    <div class="pre-title margin-bottom-double">Our approach</div>
    <div class="container container-nested">
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
