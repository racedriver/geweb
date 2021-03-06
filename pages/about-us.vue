<template>
  <div class="text-white">
    <HeadText :title="headTitle"/>
    <main class="">
      <section class="text-lg px-4-dynamic py-16">
        <div class="z-10 flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto flex items-center">
          <div class="text-white">
            <h2 class="mb-6 text-4xl">
              <DynamicText :value="title"/>
            </h2>
            <!--img
              alt="About Us"
              src="../static/images/design-teamwork.jpg"
              class="float-right m-5 max-w-md"
            /-->
            <DynamicText :value="text"/>
          </div>
        </div>
      </section>
      <section class="bg-primary ">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 space-y-12">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-black dark:text-gray-100">
            <DynamicText :value="team.title"/>
          </h2>
          <ul class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            <li
              v-for="(entry, i) in team.entries"
              :key="i"
              class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
            >
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg " :src="entry.image"
                     :alt="entry.alt ? entry.alt : entry.name">
              </div>
              <div class="sm:col-span-2 space-y-4 text-lg">
                <div class="leading-6 font-medium space-y-1">
                  <h3>
                    <DynamicText class="text-black dark:text-gray-100 " :value="entry.name"/>
                  </h3>
                  <DynamicText class="text-indigo-600" :value="entry.title"/>
                </div>
                <DynamicText class="text-lg text-gray-500" :value="entry.text"/>
                <DynamicText class="fa-brand-2 justify-self-end"
                             subClass="cursor-pointer"
                             v-for="(social, i) in entry.social" :key="i"
                             :value="social"/>
                <DynamicText class="text-base text-gray-800 dark:text-gray-600 justify-self-end"
                             :value="entry.personality"/>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="py-16 w-full max-w-7xl mx-auto text-center">
        <h2 class="text-4xl">Interested in joining our team?</h2>
        <div class="text-white mb-8 lg:mb-12 text-xl">
          Come join our team at Skylines One and make awesome digital
          products!
        </div>
        <nuxt-link class="bg-green-500 inline-block w-4/5 py-2 rounded text-white" to="/contact-us">Join Us</nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>
import data from "/static/data"

export default {
  name: 'AboutUs',
  data() {
    return data.aboutUs
  }
}
</script>
