<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 md:max-w-7xl"
    >
      <h2
        class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
      >
        {{ keyword }}
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
      >
        {{ title }}
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {{ text }}
      </p>
      <div class="mt-12">
        <div
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch items-stretch"
        >
          <div class="my-4 bg-gray-50" v-for="(entry, i) in entries" :key="i">
            <div class="bg-white pt-12" />
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-4">
              <div class="-mt-12 h-full">
                <div>
                  <span
                    class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg"
                  >
                    <img class="h-24" :src="entry.image" />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ entry.title }}
                </h3>
                  <p class="mt-5 text-base text-gray-500 self-center flex my-auto">
                    {{ entry.text }}
                  </p>
              </div>
            </div>
          </div>
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
      keyword: 'DEPLOY FASTER',
      title: 'Everything you need to bring your project into reality',
      text:
        'Out of your expectations, we create even better solutions. By pushing the boundaries we create truly innovative software applications.',
      entries: [
        {
          image: '/images/cloud%20computing.png',
          title: 'Cloud Software',
          text:
            " We will almost always suggest to develop cloud first because it's\n" +
            '              often the right choice. If you have specific needs for your cloud\n' +
            '              provider and/or your security we will discuss these during the\n' +
            '              setup phase.',
        },
        {
          image: '/images/ux%20design.png',
          title: 'User Experience & Design',
          text:
            ' User Experience Is Most Important Since It Directly Translates To\n' +
            '              Customer Satisfaction And Customer Retention And We Know That From\n' +
            '              Our Own Experience.',
        },
        {
          image: '/images/application%20development.png',
          title: 'Application Development',
          text:
            'We Will Handle The Entire Process. Just Lean Back And Let Us Do\n' +
            '              The Magic!',
        },
        {
          image: '/images/software.jpeg',
          title: 'Data Management',
          text:
            ' Skylines One Will Take Care Of Your Application Hosting, Databases\n' +
            "              And File Storage So You Don't Have To.",
        },
        {
          extraClass: 'wrapper-21to9',
          image: '/images/mqdefault_6s.png',
          title: 'Robotics and Machine Learning',
          text:
            'We Are Experts In The Fields Of Robotics, Machine Learning and\n' +
            '              Industrial Automation (Industry 4.0). Try Us!',
        },
        {
          image: '/images/industries.jpeg',
          title: 'Different industries',
          text:
            '  We Have Experience In Many Industries Including Automotive,\n' +
            '              Transport, Real Estate, Robotics, Machine Learning, Cloud,\n' +
            '              Industry 4.0, IoT And More. Ask Us For Ideas On Your Project.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
