<template>
  <div
    class="section bg-accent position-relative overflow-hidden"
    style="background-color: transparent"
  >
    <Title>what we do</Title>
    <div class="container margin-bottom">
      <div class="col text-align-center block-centered lg-8 md-12">
        <h2 style="color: #fff">Unique software solutions</h2>
        <div class="text-medium low-text-contrast" style="color: #fff">
          Skylines One is a full-service software development agency offering
          innovative software applications which move the boundaries. Our
          sophisticated approach to the development of digital experiences
          exceeds all expectations.
        </div>
      </div>
    </div>
    <div class="container is-fullwidth padding-left padding-right">
      <div class="col lg-12 xs-no-padding-left-right">
        <div class="w-layout-grid c-grid-services">
          <WhatWeDoEntry v-for="(entry, i) in entries" :entry="entry" :key="i"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDo',
  data() {
    return {
      entries: [
        {
          image: "/images/cloud%20computing.png",
          title: "Cloud Software",
          text: " We will almost always suggest to develop cloud first because it's\n" +
            "              often the right choice. If you have specific needs for your cloud\n" +
            "              provider and/or your security we will discuss these during the\n" +
            "              setup phase.",
        },
        {
          extraClass: "pull-down",
          image: "/images/ux%20design.png",
          title: "User Experience & Design",
          text: " User Experience Is Most Important Since It Directly Translates To\n" +
            "              Customer Satisfaction And Customer Retention And We Know That From\n" +
            "              Our Own Experience.",
        },
        {
          image: "/images/application%20development.png",
          title: "Application Development",
          text: "We Will Handle The Entire Process. Just Lean Back And Let Us Do\n" +
            "              The Magic!",
        },
        {
          image: "/images/software.jpeg",
          title: "Data Management",
          text: " Skylines One Will Take Care Of Your Application Hosting, Databases\n" +
            "              And File Storage So You Don't Have To.",
        },
        {
          extraClass: "pull-down",
          image: "/images/mqdefault_6s.png",
          title: "Robotics and Machine Learning",
          text: "We Are Experts In The Fields Of Robotics, Machine Learning and\n" +
            "              Industrial Automation (Industry 4.0). Try Us!",
        },
        {
          image: "/images/industries.jpeg",
          title: "Different industries",
          text: "  We Have Experience In Many Industries Including Automotive,\n" +
            "              Transport, Real Estate, Robotics, Machine Learning, Cloud,\n" +
            "              Industry 4.0, IoT And More. Ask Us For Ideas On Your Project.",
        },
      ],
    }
  },
}
</script>

<style scoped></style>
