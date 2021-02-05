<template>
  <div>
    <HeaderDesktop :sites="this.sites"/>
    <HeaderMobile :sites="this.sites"/>
  </div>
</template>

<script>
import data from "/static/data/header"
export default {
  name: "Header",
  data() {
    return data
  }
}
</script>
