import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/SEA/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - SeaCoahuila',
    title: 'SeaCoahuila',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/universal-storage',
    '@nuxtjs/firebase',
    
    
  ],
  // MIDDLEWARES
  firebase: {
    terminateDatabasesAfterGenerate: true,
    config: {
      apiKey: "AIzaSyDIS5dpFmXD6qjmH51HrQ_UMmKWtRvKKxc",
      authDomain: "transparenciaseac.firebaseapp.com",
      projectId: "transparenciaseac",
      storageBucket: "transparenciaseac.appspot.com",
      messagingSenderId: "640440931494",
      appId: "1:640440931494:web:81e2d4d8a42d3422a0d067"
  },
  services: {
    auth: true, // Just as example. Can be any other service.
    firestore: true
  },

  },
  // hooks: {
  //   generate: {
  //     async done(builder) {
  //       const appModule = await import('./.nuxt/firebase/app.js')
  //       const { session } = await appModule.default(
  //         builder.options.firebase.config,
  //         {
  //           res: null,
  //         }
  //       )
  //       try {
  //         session.database().goOffline()
  //       } catch (e) { }
  //       try {
  //         session.firestore().terminate()
  //       } catch (e) { }
  //     },
  //   },
  // },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bluegreyt: '#37474F',
          cc: '#F7F3DF ',
          peac: '#191501 ',
          sei: '#2a2f30',
          revista: '#1a000d'
        },
        light: {
          primary: colors.blue.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.amber.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.lighten4,
          success: colors.green.lighten3,
          article: '#F5F5F5',
          bluegreyt: '#F5F5F5',
          cc: '#F5F5F5',
          peac: '#FBF8EE',
          sei: '#F5F5F5',
          seicard: '#37474F',
          revista: '#f7edf2',
          cpc: '#EDE7F6',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
    extend(config) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'));

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf|xlsx)$/i;

      return config;
    },
  }
}
