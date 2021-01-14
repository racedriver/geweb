<template>
  <div :class="'c-grid-services__item ' + entry.extraClass">
    <img :src="entry.image" class="margin-bottom" height="128"/>
    <h3>{{ entry.title }}</h3>
    <div class="margin-bottom">
      {{ entry.text }}
    </div>
    <a
      :href="entry.link || 'contact-us'"
      class="button-primary is-ghost is-small on-lg-margin-bottom w-inline-block"
    >
      <div class="button-primary-text">{{ entry.button || "Let's talk" }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDoEntry',
  props: {
    entry: {
      extraClass: String,
      image: String,
      title: String,
      text: String,
      link: String,
      button: String,
    },
  },
}
</script>

<style scoped></style>
