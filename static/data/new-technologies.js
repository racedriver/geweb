let basePath = '/images/technologies/'

export default {
  title: [
    { value: 'Use the newest technologies like ' },
    { value: 'Kotlin', clazz: 'text-white' },
    { value: ', ' },
    { value: 'RavenDB', clazz: 'text-white' },
    { value: ' or the power of the ' },
    { value: 'Google Cloud', clazz: 'text-white' },
  ],
  entries: [
    { image: basePath + 'ravendb.png', alt: 'RavenDB' },
    { image: basePath + 'kotlin-logo.svg', alt: 'Kotlin' },
    {
      image: basePath + 'google_cloud/icon_cloud_192pt_clr.png',
      alt: 'Google Cloud',
    },
  ],
}
