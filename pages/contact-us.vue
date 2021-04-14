<template>
  <main>
    <HeadText title="Contact Us"/>
<!--    <div class="py-32 bg-blush-500 text-white text-6xl text-extrabold text-center flex justify-center">-->
<!--      <DynamicText class="max-w-5xl" :value="copy"/>-->
<!--    </div>-->
    <ContactForm class=" "/>
  </main>
</template>

<script>

export default {
  name: 'contact-us',
  head: {
    title: 'Contact us',
    script:[
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org/",
          "@type": "ContactPage",
        }
      },
    ],
  }
}
</script>
