import { config } from '@vue/test-utils'

config.stubs['nuxt-link'] = {
  template: '<a><slot /></a>',
}

config.stubs['t-modal'] = {
  template: '<div class="--modal-profile"><slot /></div>',
}

config.stubs['unicon'] = {
  template: '<div class="unicon"><slot /></div>',
}

config.stubs['popover'] = {
  template: '<div class="popover"><slot /></div>',
}

config.stubs['nuxt-content'] = {
  template: '<div class="nuxt-content-container"><slot /></div>',
}
