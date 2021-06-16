import About from '@/pages/about'
import Banner from '@/components/Banner'
import { createTestWrapper } from '../factory'

const options = {
  stubs: {
    Banner,
  },
}

describe('About', () => {
  let wrapper

  beforeEach(() => {
    wrapper = createTestWrapper(About, { ...options })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders Banner component', async () => {
    const banner = wrapper.findComponent(Banner)

    expect(banner.exists()).toBe(true)
  })

  it('renders the about content container', async () => {
    const about = wrapper.find('div.nuxt-content-container')

    expect(about.exists()).toBe(true)
  })
})
