<template>
  <div>

    <script>
      function sendContact() {
        let data = Array.from(document.querySelector("#contact-form").children).reduce((acc, input) => ({
          ...acc,
          [input.id]: input.value
        }));

        console.log(data)
        fetch("https://api.telegram.org/bot681322477:AAGmZBPAvfVvQBybo2dyXIdNaP4ait72344/sendMessage", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, //DO NOT REMOVE
          body: JSON.stringify({
            chat_id: -483038812,
            text:
              "Name: " + data.name + "\n" +
              "Contact method: " + data["preferred-method-of-contact"] + "\n" +
              "Contact method value: " + data.contact + "\n" +
              "Text: " + data.text + "\n\n" //+
            // "Country: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.country) + "\n" +
            // "Language: " + this.formData.fingerprint.values[2].value + "\n" +
            // "Timezone: " + this.formData.fingerprint.values[9].value + "\n" +
            // "Platform: " + this.formData.fingerprint.values[16].value + "\n" +
            // "UserAgent: " + this.formData.fingerprint.values[0].value + "\n" +
            // "Renderer: " + this.formData.fingerprint.values[17].value + "\n\n" +
            // "IP: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.query) + "\n" +
            // "ISP: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.isp) + "\n" +
            // "IpName: " + (this.formData.ip == null ? "BLOCKED BY CLIENT" : this.formData.ip.ipName) + "\n\n" +
            // "User: " + this.formData.user + "\n" +
            // "Request-Id: " + VueCookies.get(contactRequestKey) + "\n" +
            // "Fingerprint: " + this.formData.fingerprint.hash + "\n\n"
          }),
        }).then(() => {
          window.location.href = "success";
        })
      }
    </script>

    <div class="section">
      <div class="container is-wide">
        <div class="col lg-12 position-relative bg-accent">
          <div class="container container-nested position-relative">

            <div class="col lg-4"></div>
            <div class="col lg-8 md-12 padding-double">
              <h1>Contact Us</h1>

              <div class="w-form">
                <form id="contact-form" data-name="Contact" name="contact" onsubmit="return false">
                  <div hidden></div> <!--Fixes a javascript bug! Do not delete-->
                  <input id="name" autocomplete="Name" class="form-input-text w-input" maxlength="256"
                         placeholder="Your name" type="text">


                  <select id="preferred-method-of-contact" class="form-select w-select"
                          name="preferred-method-of-contact">
                    <option disabled selected value="">Preferred method of contact...</option>
                    <option>Discord</option>
                    <option>Google Meet</option>
                    <option>Zoom</option>
                    <option>Signal</option>
                    <option>Telegram</option>
                    <option>Whatsapp</option>
                    <option>Phone</option>
                    <option>EMail</option>
                    <!--                            <option>Facetime</option>-->
                    <!--                            <option>iMessage</option>-->
                    <option>SMS</option>
                    <option>Other</option>
                  </select>
                  <input id="contact" autocomplete="email" class="form-input-text w-input"
                         data-name="preferred-method-of-contact" maxlength="1024" placeholder="Contact method" required
                         type="text">
                  <textarea id="text" class="form-textarea w-input" data-name="text" maxlength="10000"
                            placeholder="Let's make something incredible together!"></textarea>
                  <button class="button-primary is-form-button w-button" data-wait="Please wait..."
                          onclick="sendContact();" type="submit">Submit
                  </button>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <company-data/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us"
}
</script>

<style scoped>

</style>
