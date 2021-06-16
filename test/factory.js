import { mount, createLocalVue } from '@vue/test-utils'
import { colors } from '../config'

export const createTestVue = () => {
  const localVue = createLocalVue()
  return localVue
}

export const createTestWrapper = (component, options = {}) => {
  const { localVue } = createTestVue()

  options.mocks = {
    ...options.mocks,
    $moment: () => {
      return {
        format: () => jest.fn(),
      }
    },
  }

  if (options.mocks.$store) {
    options.mocks.$store = {
      state: {
        ...options.mocks.$store.state,
        colors: {
          colors,
        },
      },
    }
  }

  const wrapper = mount(component, {
    ...options,
    localVue: options.localVue ? options.localVue : localVue,
  })

  return wrapper
}
