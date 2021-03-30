export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Skylines One',
    title: 'The simplest way to solve your problem using <software>.',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'UX that simply works, just like Apple',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: 'Skylines One LLC',
      },
      {
        name: 'twitter:description',
        content: 'Have your product built by ex-Apple engineers for the best user experience possible! with Kotlin, Nuxt.js, Tailwind and the safety of the Google Cloud',
      },
      {
        name: 'twitter:image',
        content: 'https://skylines.one/images/logo.png',
      },
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    script: [
      {src: '/js/google-tagmanager.js', mode: 'client'},
      // { src: '~/assets/js/theme.js', mode: 'client'},
      {
        src: '/js/tawk.to.js',
        async: true,
        body: true,
      },
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org/",
          "@type": "Organization",
          "url": "https://skylines.one",
          "legalName": "SkyLines One LLC",
          "location": "USA",
          "logo": "https://skylines.one/images/logo%20v4.1%20with%20black%20circle%20arrows%20only%2072ppi.png",
          "email": "hello@skylines.one",
          "founder": [
            {
              "givenName": "Alex",
              "familyName": "Mittler",
              "gender": "Male",
              "image": "https://skylines.one/images/alex-mittler.jpg",
            },
            {
              "givenName": "Lars",
              "familyName": "Artmann",
              "gender": "Male",
              "image": "https://skylines.one/images/lars-artmann.jpg",
            },
          ],
          "employee": [
            {
              "givenName": "Wlad",
              "gender": "Male",
              "image": "https://skylines.one/images/wlad.png",
            },
            {
              "givenName": "Christoph",
              "gender": "Male",
            },
          ],
          "telephone": "+1 (302) 747-1888",
          "foundingDate": "3, June 2020",
          "foundingLocation": "CS:GO",
          "numberOfEmployees": "16",
        }
      },
    ],
    bodyAttrs: {
      class: process.env.NODE_ENV !== 'production' ? 'debug-screens' : '',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/all-styling.css',
    '@/assets/css/tailwind.css',
    '@/assets/scss/defaults.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/components',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-i18n',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //https://axios.nuxtjs.org/
    '@nuxtjs/axios'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: process.env.NODE_ENV !== 'production' ? '' : '',
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: './tailwind.config.js',
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    locales: [
      {
        icon:
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png',
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.js',
      },
      {
        icon:
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-germany_1f1e9-1f1ea.png',
        name: 'Deutsch',
        code: 'de',
        iso: 'de',
        file: 'de.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
  },
  pwa: {
    manifest: {
      name: 'Skylines One',
      description:
        'Have your product built by ex-Apple engineers for the best user experience possible! with Kotlin, Nuxt.js, Tailwind and the safety of the Google Cloud',
      display: 'fullscreen',
      background_color: '#000',
      short_name: 'Skylines One',
      lang: 'en',
      useWebmanifestExtension: false,
      icons: [],
    },
    meta: {
      ogHost: 'https://skylines.one',
    },
  },
  sitemap: {
    hostname: 'https://skylines.one',
    gzip: true,
    exclude: [
      '/success',
      '/landing',
      '/partners/**'
    ],
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    i18n: true,
  },
  robots: {
    UserAgent: '*',
    Disallow: [
      '/success',
      '/landing',
      '/partners*'
    ],
    Sitemap: "https://skylines.one/sitemap.xml"
  }
}
