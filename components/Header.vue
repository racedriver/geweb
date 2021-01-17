<template>
  <div>
    <HeaderDesktop :sites="sites"/>
    <HeaderMobile :sites="sites"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sites: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About Us",
          link: "about-us"
        }, {
          name: "Magazine",
          link: "magazine"
        },
        {
          name: "Portfolio",
          link: "portfolio"
        },
        {
          name: "Career",
          link: "career"
        },
        {
          name: "Contact Us",
          link: "contact-us"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
