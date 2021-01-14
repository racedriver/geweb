<template>
  <div class="col">
    <div class="text-xlarge is-thin margin-bottom-double">
      Let&#x27;s build something great together
      <a class="email-footer" href="mailto:hello@skylines.one"/>
    </div>
    <div class="container container-nested is-wrapped">

      <FooterLinkBlock title="Office">
        <p class="margin-bottom">
          16192 Coastal Highway<br/>
          Lewes DA 19958<br/>
          County of Sussex<br/>
        </p>
      </FooterLinkBlock>

      <FooterLinkBlock title="Let's talk">
        <a class="email-footer" href="mailto:hello@skylines.one">hello@skylines.one</a><br/>
        <a class="phone-footer" href="tel:+16464000535">(646) 400-0535</a>
      </FooterLinkBlock>

      <FooterLinkBlock title="Company">
        <OtherSiteLink v-for="site in Company" :site="site"/>
      </FooterLinkBlock>

      <FooterLinkBlock title="Let's connect">
        <OtherSiteLink v-for="site in Connections" :site="site"/>
      </FooterLinkBlock>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  data() {
    return {
      Company: [
        {
          name: 'About',
          link: 'about-us',
        },
        {
          name: 'Our work',
          link: 'portfolio',
        },
        {
          name: 'Career',
          link: 'career',
        },
        {
          name: 'Privacy Policy',
          link: 'privacy',
        },
      ],
      Connections: [
        {
          link: 'https://linkedin.com/company/skylinesone',
          icon: '',
          name: 'LinkedIn',
        },
        {
          link: 'https://discord.skylines.one',
          icon: '',
          name: 'Discord',
        },
        {
          link: 'https://github.com/orgs/skylinesone',
          icon: '',
          name: 'Github',
        },
        {
          link: 'https://wa.me/31638450573',
          icon: '',
          name: 'Whatsapp',
        },
        {
          link: 'https://m.me/alexm888',
          icon: '',
          name: 'Messenger',
        },
        {
          link: 'https://t.me/joinchat/GdtTxhUBOd5x742Yf6Z9vA',
          icon: '',
          name: 'Telegram',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
