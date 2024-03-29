import { head } from './config'
require('dotenv').config()

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@plugins/vue-unicons', mode: 'client' },
    { src: '@plugins/helper', mode: 'client' },
    { src: '@plugins/vue-js-popover', mode: 'client' },
    { src: '@plugins/vue-tailwind', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
  ].concat(
    process.env.NODE_ENV !== 'production' ? '@nuxtjs/eslint-module' : []
  ),

  axios: {
    proxy: true,
  },

  moment: {
    defaultTimezone: 'Asia/Manila',
  },

  env: {
    GH_GQL_API_URL:
      process.env.GH_GQL_API_URL || 'https://api.github.com/graphql',
    GH_GQL_ACCESS_KEY: process.env.GH_GQL_ACCESS_KEY,
    SESSION_USER_KEY_NAME: process.env.SESSION_USER_KEY_NAME,
    SESSION_ORG_KEY_NAME: process.env.SESSION_ORG_KEY_NAME,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['vue-tailwind'],
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID, // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },
}
