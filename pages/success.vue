<template>
  <main class="py-16 pb-24">
    <div style="background-color: rgba(48, 196, 126, 0.95)">
      <div class="max-w-7xl mx-auto lg:grid grid-cols-3 gap-8 relative">
        <div class="col-span-2 col-start-2 p-20 mb-1 text-white text-xl">
          <h1>Thank you!</h1>
          <h2>Your submission has been received!</h2>
        </div>
        <div
          class="col-span-1 lg:absolute lg:top-1/4 lg:w-96 pt-12 pb-4 px-12 bg-white shadow-2xl rounded-md text-black"
        >
          <div class="text-lg mb-6">
            Lewes, DA 19958
          </div>
          <div class="text-lg mb-6">
            <a href="mailto:hello@skylines.one">hello@skylines.one</a>
          </div>
          <div class="text-lg mb-12">+1 (302) 747-1888</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import data from "/static/data"
export default {
  name: 'success',
  head: {
    title: 'Success'
  },
  data() {
    return data
  }
}
</script>
