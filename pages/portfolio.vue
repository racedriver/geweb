<template>
  <section>
    <div class="text-white">
      <HeadText title="Portfolio" />
      <main class="grid my-20 w-full max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-8 px-4-dynamic mx-auto">
        <nuxt-link
          class="inline-block relative bg-transparent no-underline aspect-w-16 aspect-h-9 "
          :to="entry.link"
          v-for="(entry, i) in this.entries"
          :key="i">
        </nuxt-link>
      </main>
    </div>
  <div class="container">
    <div class="card">
      <img src="../static/images/systems.jpg" width="50%" height="50%">
      <div class="card__head"><img src="../static/images/logo v4.1 with black circle arrows only 72ppi.png" style="float:left;width:42px;height:42px;"><a href="https://www.iovent.net/">See iovent website.</a></div>
    </div>
    <div class="card">
      <img src="../static/images/chronow.png">
      <div class="card__head"><img src="../static/images/logo v4.1 with black circle arrows only 72ppi.png" style="float:left;width:42px;height:42px;"><a href="https://chronow.us/">See chronow website.</a></div>
    </div>
    <div class="card">
      <img src="../static/images/myfitmentwebfit.png">
      <div class="card__head"><img src="../static/images/logo v4.1 with black circle arrows only 72ppi.png" style="float:left;width:42px;height:42px;"><a href="https://play.google.com/store/apps/details?id=one.skylines.myfitment.app">Download app.</a></div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
name: "myportfolio.vue",
  head:{
  title: 'Portfolio',
  script:[
    {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "mainContentOfPage": {
          "about": "The Portfolio of SkyLines One"
        }
      }
    },
  ]
  }
}
</script>

<style>

body {
  background: #000;
  font-family: "Corbel Light";
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vmin;
  overflow: hidden;
  transform: skew(0deg); /*<!-- If deg set it will make rectangular shape -->*/
.card {
  flex: 1;
  transition: all 1s ease-in-out;
  height: 75vmin; /* This is the height of actual box itself */
  position: relative;
  margin-bottom: 10vmin;
  margin-left: 5vmin;
.card__head {
  color: black;
  background:  rgba(48, 196, 126, 0.5);
  padding: 0.5em;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
  transition: all 0.5s ease-in-out;
  min-width: 100%; /* This is the width of card head, changing it to 15% from 100% heps specially in column view */
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1em;
  white-space: nowrap;
}
/* And for whatever reason media query needs to be located specifically here for max-wid parameter, as mentioned above setting it to  15% from 100% heps specially in column view */
@media screen and (max-width: 600px) {
  .card__head {
    min-width: 15%;
  }
}
&:hover {
   flex-grow: 10;
img {
  filter: grayscale(0);
}
.card__head {
  text-align: center;
  top: calc(100% - 2em);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.8em;
  transform: rotate(0deg) skew(0deg);
}
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-in-out;
  filter: grayscale(100%);
}
&:not(:nth-child(5)) {
   margin-right: 1em;
 }
}
}
/* On screens that are 600px wide or less, make the portfolio items on top of each other instead of next to each other */

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
}
}

</style>

