export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Global Engineering',
    title: 'Solve your engineering problem',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Software and Hardware that simply works, just like Apple',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: 'Global Engineering LLC',
      },
      {
        name: 'twitter:description',
        content: 'Have your product built by ex-Apple engineers for the best user experience possible!',
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
          "name": "Global Engineering",
          "legalName": "Global Engineering LLC",
          "location": "USA",
          "logo": "https://skylines.one/images/logo%20v4.1%20with%20black%20circle%20arrows%20only%2072ppi.png",
          "email": "hello@global-engineering.io",
          "duns": "117640908",
          "slogan": "Solve your engineering problem",
          "founder": [
            {
              "givenName": "Alex",
              "familyName": "Mittler",
              "gender": "Male",
              "image": "https://skylines.one/images/alex-mittler.jpg",
              "jobTitle": "Founder",
              "knowsLanguage": "DE, EN",
            },
          ],
          "employee": [
            {
              "givenName": "Wlad",
              "gender": "Male",
              "image": "https://skylines.one/images/wlad.jpg",
            },
            {
              "givenName": "Christoph",
              "gender": "Male",
            },
          ],
          "telephone": "+1 (302) 747-1888",
          "foundingDate": "3, June 2020",
          "foundingLocation": "Silicon Valley, USA",
          "numberOfEmployees": "16",
        }
      },
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "locationCreated": "US",
        }
      },
    ],
    bodyAttrs: {
      class: process.env.NODE_ENV !== 'production' ? 'debug-screens' : '',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/all-styling.css',
    '~/assets/css/tailwind.css',
    '~/assets/scss/defaults.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

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
    transpile:["three"],
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
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/flag-poland_1f1f5-1f1f1.png',
        name: 'Polski',
        code: 'en',
        iso: 'en',
        file: 'en.js',
      },
      {
        icon:
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/flag-germany_1f1e9-1f1ea.png',
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
      name: 'Global Engineering',
      description:
        'Have your product built by ex-Apple engineers for the best user experience possible!',
      display: 'fullscreen',
      background_color: '#000',
      short_name: 'Global Engineering',
      lang: 'en',
      useWebmanifestExtension: false,
      icons: [],
    },
    meta: {
      ogHost: 'https://global-engineering.io',
      theme_color: "#000000",
    },
  },
  sitemap: {
    hostname: 'https://global-engineering.io',
    gzip: true,
    exclude: [
      '/success',
      '/landing',
      '/partners/**'
    ],
    xmlNs: 'xmlns:xhtml="http://www.w3.org/1999/xhtml"',
    i18n: true,
  },
  robots: {
    UserAgent: '*',
    Disallow: [
      '/success',
      '/landing',
      '/partners*'
    ],
    Sitemap: "https://global-engineering.io/sitemap.xml"
  }
}
