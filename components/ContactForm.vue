<template>
  <div>
    <ErrorAlert v-if="error" class="text-4xl" reason="Your contact form is broken!"/>
    <div class="flex bg-primary">
      <div class=" lg:w-1/2">
        <div
          class="h-56 object-cover lg:h-full"
          style="background-image: url(https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)"
        >
          <slot></slot>
        </div>
      </div>
      <div
        class="pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto"
      >
        <div class="lg:pl-8 lg:col-start-2">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white">
              Zróbmy razem coś wielkiego!
            </h2>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400 sm:mt-3">
              Wyślij do nas wiadomość korzystając z poniższego formularza!
            </p>
            <form
              id="contact-form"
              @submit.prevent="sendContact"
              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div class="sm:col-span-2">
                <label
                  for="fullname"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >Twoje imię</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    v-model="fullName"
                    autocomplete="name"
                    class="block w-full shadow-sm sm:text-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-800 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >Email</label
                >
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full shadow-sm sm:text-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-800 rounded-md"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >Nazwa Twojej firmy</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    v-model="company"
                    autocomplete="organization"
                    class="block w-full shadow-sm sm:text-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-800 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200">Numer kontaktowy</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  v-model="phone"
                  autocomplete="tel"
                  aria-describedby="phone_description"
                  class="mt-1 block w-full shadow-sm sm:text-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-800 rounded-md"
                />
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="how_can_we_help"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >Co możemy dla Ciebie zrobić?</label>
                  <span
                    id="how_can_we_help_description"
                    class="text-sm text-gray-500"
                  >Max. 500 znaków</span>
                </div>
                <textarea
                  v-model="description"
                  id="how_can_we_help"
                  name="how_can_we_help"
                  aria-describedby="how_can_we_help_description"
                  autocomplete="how_can_we_help"
                  rows="4"
                  class="mt-1 block w-full shadow-sm sm:text-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-800 rounded-md"
                  maxlength="500"
                ></textarea>
              </div>
              <fieldset class="sm:col-span-2">
               
              </fieldset>
              <div class="sm:col-span-2">
                <label
                  for="referee"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >Skąd się o nas dowiedziałeś?</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="referee"
                    id="referee"
                    v-model="referee"
                    class="shadow-sm dark:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                  sm:text-sm border-gray-300 dark:border-gray-800 rounded-md"
                  />
                </div>
              </div>
              <div class="text-right sm:col-span-2">
                <button
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-gray-900
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--suppress ExceptionCaughtLocallyJS -->
<script>
import axios from "axios";
import Error from "@/layouts/error";

export default {
  name: 'ContactForm',
  components: {Error},
  data() {
    return {
      error: false,
      fullName: "",
      email: "",
      company: "",
      phone: "",
      description: "",
      budget: "",
      referee: ""
    }
  },
  methods: {
    async sendContact(event) {
      event.preventDefault()
      const data = {
        fullName: this.fullName,
        email: this.email,
        company: this.company,
        phone: this.phone,
        description: this.description,
        budget: this.budget,
        referee: this.referee,
        from: window.location.href,
      }

      const content = JSON.stringify(data)
      console.log(content)

      try {
        const respond = await axios.post("https://api.skylines.one/contact", content, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(respond)

        if (respond.status !== 200) {
          throw new Error("Status is not 200")
        } else {
          await this.$router.push("/success")
        }

      } catch {
        this.error = true
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      }

    },
  },
}
</script>
