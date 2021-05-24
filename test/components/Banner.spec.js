import { mount } from '@vue/test-utils'
import Banner from '@/components/Banner'

const title = 'This is some title'
const kicker = 'This is some kicker'

const wrapper = mount(Banner, {
  propsData: {
    title,
    kicker,
  },
})

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains title', async () => {
    const el = wrapper.find('h1.--title')

    expect(el.text()).toBe(title)
  })

  it('contains kicker', async () => {
    const el = wrapper.find('p.--kicker')

    expect(el.text()).toBe(kicker)
  })
})
