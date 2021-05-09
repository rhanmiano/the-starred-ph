import { mount } from '@vue/test-utils'
import Dimmer from '@/components/Dimmer'

const width = '100px'
const height = '200px'

const wrapper = mount(Dimmer, {
  propsData: {
    width,
    height,
  },
})

describe('Dimmer', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should render a div with class of dimmer, and contains appropriate styles', async () => {
    const dimmer = wrapper.find('div.dimmer')

    expect(dimmer.exists()).toBeTruthy()

    expect(dimmer.element.style.width).toBe(width)
    expect(dimmer.element.style.height).toBe(height)
  })
})
