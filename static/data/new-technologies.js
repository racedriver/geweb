let basePath = '/images/technologies/'

export default {
  title: [
    { value: 'Use the newest technologies like' },
    {
      value: 'Kotlin',
      class: 'text-white',
      seperator: '',
      href: 'https://kotlinlang.org/',
    },
    { seperator: ', ' },
    { value: 'Vue.js', class: 'text-white', href: 'https://vuejs.org/' },
    { value: 'or the power of the' },
    {
      value: 'Google Cloud',
      class: 'text-white',
      href: 'https://cloud.google.com/',
    },
  ],
  entries: [
    // { image: basePath + 'ravendb.png', alt: 'RavenDB' },
    { image: basePath + 'kotlin-logo.svg', alt: 'Kotlin' },
    { image: basePath + 'vue.js-logo.png', alt: 'Vue.js' },
    {
      image: basePath + 'google_cloud/icon_cloud_192pt_clr.png',
      alt: 'Google Cloud',
    },
  ],
}
