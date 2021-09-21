export default {

  // Target Deployment
  target: 'server',

  //rendering mode SSR	
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/images/logo.png'
      // },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      },
    ],
    script: [
      { src: '/js/coreui.bundle.min.js' }, 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.min.css',
    '@/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: ''
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}