import Vue from 'vue'
import { config } from '@vue/test-utils'

// Mock Nuxt components
config.stubs['nuxt-link'] = {
  template: '<a><slot /></a>',
}
