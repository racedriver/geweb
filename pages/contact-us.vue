<template>
  <div>
    <HeadText title="Contact Us"/>
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="">
        </div>
      </div>
      <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p class="mt-4 text-lg text-gray-500 sm:mt-3">
              We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.
            </p>
            <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                <div class="mt-1">
                  <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <div class="mt-1">
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                <div class="mt-1">
                  <input type="text" name="company" id="company" autocomplete="organization" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                  <span id="phone_description" class="text-sm text-gray-500">Optional</span>
                </div>
                <div class="mt-1">
                  <input type="text" name="phone" id="phone" autocomplete="tel" aria-describedby="phone_description" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="how_can_we_help" class="block text-sm font-medium text-gray-700">How can we help you?</label>
                  <span id="how_can_we_help_description" class="text-sm text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1">
                  <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <fieldset class="sm:col-span-2">
                <legend class="block text-sm font-medium text-gray-700">
                  Expected budget
                </legend>
                <div class="mt-4 grid grid-cols-1 gap-y-4">
                  <div class="flex items-center">
                    <input id="budget_under_25k" name="budget" value="under_25k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="budget_under_25k" class="ml-3">
                      <span class="block text-sm text-gray-700">Less than $25K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_25k-50k" name="budget" value="25k-50k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="budget_25k-50k" class="ml-3">
                      <span class="block text-sm text-gray-700">$25K – $50K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_50k-100k" name="budget" value="50k-100k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="budget_50k-100k" class="ml-3">
                      <span class="block text-sm text-gray-700">$50K – $100K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_over_100k" name="budget" value="over_100k" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="budget_over_100k" class="ml-3">
                      <span class="block text-sm text-gray-700">$100K+</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div class="sm:col-span-2">
                <label for="how_did_you_hear_about_us" class="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                <div class="mt-1">
                  <input type="text" name="how_did_you_hear_about_us" id="how_did_you_hear_about_us" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>
              <div class="text-right sm:col-span-2">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

<!--    <script>-->
<!--      function sendContact() {-->
<!--        let data = Array.from(document.querySelector("#contact-form").children).reduce((acc, input) => ({-->
<!--          ...acc,-->
<!--          [input.id]: input.value-->
<!--        }));-->

<!--        console.log(data)-->
<!--        fetch("https://api.telegram.org/bot681322477:AAGmZBPAvfVvQBybo2dyXIdNaP4ait72344/sendMessage", {-->
<!--          method: 'POST',-->
<!--          headers: {'Content-Type': 'application/json'}, //DO NOT REMOVE-->
<!--          body: JSON.stringify({-->
<!--            chat_id: -483038812,-->
<!--            text:-->
<!--              "Name: " + data.name + "\n" +-->
<!--              "Contact method: " + data["preferred-method-of-contact"] + "\n" +-->
<!--              "Contact method value: " + data.contact + "\n" +-->
<!--              "Text: " + data.text + "\n\n" //+-->
<!--            // "Country: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.country) + "\n" +-->
<!--            // "Language: " + this.formData.fingerprint.values[2].value + "\n" +-->
<!--            // "Timezone: " + this.formData.fingerprint.values[9].value + "\n" +-->
<!--            // "Platform: " + this.formData.fingerprint.values[16].value + "\n" +-->
<!--            // "UserAgent: " + this.formData.fingerprint.values[0].value + "\n" +-->
<!--            // "Renderer: " + this.formData.fingerprint.values[17].value + "\n\n" +-->
<!--            // "IP: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.query) + "\n" +-->
<!--            // "ISP: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.isp) + "\n" +-->
<!--            // "IpName: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.ipName) + "\n\n" +-->
<!--            // "User: " + this.formData.user + "\n" +-->
<!--            // "Request-Id: " + VueCookies.get(contactRequestKey) + "\n" +-->
<!--            // "Fingerprint: " + this.formData.fingerprint.hash + "\n\n"-->
<!--          }),-->
<!--        }).then(() => {-->
<!--          window.location.href = "success";-->
<!--        })-->
<!--      }-->
<!--    </script>-->

<!--    <div class="section">-->
<!--      <div class="container is-wide">-->
<!--        <div class="col lg-12 position-relative bg-accent">-->
<!--          <div class="container container-nested position-relative">-->

<!--            <div class="col lg-4"></div>-->
<!--            <div class="col lg-8 md-12 padding-double">-->
<!--              <h1>Contact Us</h1>-->

<!--              <div class="w-form">-->
<!--                <form id="contact-form" data-name="Contact" name="contact" onsubmit="return false">-->
<!--                  <div hidden></div> &lt;!&ndash;Fixes a javascript bug! Do not delete&ndash;&gt;-->
<!--                  <input id="name" autocomplete="Name" class="form-input-text w-input" maxlength="256"-->
<!--                         placeholder="Your name" type="text">-->


<!--                  <select id="preferred-method-of-contact" class="form-select w-select"-->
<!--                          name="preferred-method-of-contact">-->
<!--                    <option disabled selected value="">Preferred method of contact...</option>-->
<!--                    <option>Discord</option>-->
<!--                    <option>Google Meet</option>-->
<!--                    <option>Zoom</option>-->
<!--                    <option>Signal</option>-->
<!--                    <option>Telegram</option>-->
<!--                    <option>Whatsapp</option>-->
<!--                    <option>Phone</option>-->
<!--                    <option>EMail</option>-->
<!--                    &lt;!&ndash;                            <option>Facetime</option>&ndash;&gt;-->
<!--                    &lt;!&ndash;                            <option>iMessage</option>&ndash;&gt;-->
<!--                    <option>SMS</option>-->
<!--                    <option>Other</option>-->
<!--                  </select>-->
<!--                  <input id="contact" autocomplete="email" class="form-input-text w-input"-->
<!--                         data-name="preferred-method-of-contact" maxlength="1024" placeholder="Contact method" required-->
<!--                         type="text">-->
<!--                  <textarea id="text" class="form-textarea w-input" data-name="text" maxlength="10000"-->
<!--                            placeholder="Let's make something incredible together!"></textarea>-->
<!--                  <button class="button-primary is-form-button w-button" data-wait="Please wait..."-->
<!--                          onclick="sendContact();" type="submit">Submit-->
<!--                  </button>-->
<!--                </form>-->
<!--                <div class="w-form-done">-->
<!--                  <div>Thank you! Your submission has been received!</div>-->
<!--                </div>-->
<!--                <div class="w-form-fail">-->
<!--                  <div>Oops! Something went wrong while submitting the form.</div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <company-data/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "contact-us"
}
</script>

<style scoped>

</style>
