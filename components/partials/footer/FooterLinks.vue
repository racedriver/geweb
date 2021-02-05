<template>
  <div class="col">
    <div class="text-xlarge is-thin margin-bottom-double">
      {{ title }}
      <a class="email-footer" href="mailto:hello@skylines.one"/>
    </div>
    <div class="container container-nested is-wrapped">

      <FooterLinkBlock title="Office">
        <p class="margin-bottom">
          16192 Coastal Highway<br/>
          Lewes DE 19958<br/>
          County of Sussex<br/>
        </p>
      </FooterLinkBlock>

      <FooterLinkBlock title="Let's talk">
        <a class="email-footer" href="mailto:hello@skylines.one">hello@skylines.one</a><br/>
        <a class="phone-footer" href="tel:+13027471888">+1 (302) 747-1888</a>
      </FooterLinkBlock>

      <FooterLinkBlock title="Company">
        <OtherSiteLink v-for="(site, i) in this.company" :site="site" :key="i"/>
      </FooterLinkBlock>

      <FooterLinkBlock title="Let's connect">
        <OtherSiteLink v-for="(site, i) in this.connections" :site="site" :key="i"/>
      </FooterLinkBlock>

    </div>
  </div>
</template>

<script>
import data from "/static/data/footer-links"
export default {
  name: 'FooterLinks',
  data() {
    return data
  },
}
</script>

<style scoped></style>
