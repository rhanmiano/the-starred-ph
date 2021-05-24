import { mount, createLocalVue } from '@vue/test-utils'

export const createTestVue = () => {
  const localVue = createLocalVue()
  return localVue
}

export const createWrapper = (component, options = {}) => {
  const { localVue } = createTestVue()

  const wrapper = mount(component, {
    localVue,
    ...options,
  })
  return wrapper
}
