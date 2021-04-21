import Vue from 'vue'
// import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniStarMonochrome,
  uniAppsMonochrome,
  uniListUlMonochrome,
} from 'vue-unicons/dist/icons'

// import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([uniStarMonochrome, uniAppsMonochrome, uniListUlMonochrome])

Vue.use(Unicon)
