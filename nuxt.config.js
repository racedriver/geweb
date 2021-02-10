import { join } from 'path'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Skylines One - Application development, Cloud Software',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'End-To-End application development',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '~/assets/js/google-tagmanager.js', mode: 'client'},
      { src: '~/assets/js/theme.js', mode: 'client'},
      {
        src: 'https://cdn.lr-ingest.io/LogRocket.min.js',
        crossorigin: 'anonymous',
      },
      {
        src: '/js/tawk.to.js',
        body: true,
      },
      {
        src: '/js/log-rocket.js',
        body: true,
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
    // // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-i18n',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: process.env.NODE_ENV !== 'production' ? '' : '',
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: join(__dirname, './tailwind.config.js'),
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
        'ex-Apple engineers working on the best *user experience* possible! with Kotlin, Nuxt.js, Tailwind and the safety of the Google Cloud',
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
}
