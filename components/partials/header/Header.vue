<template>
  <div>
    <HeaderDesktop :sites="this.sites"/>
    <HeaderMobile :sites="this.sites"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return this.$t("header")
  }
}
</script>
