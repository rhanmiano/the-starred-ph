import Header from '@/components/Header'
import { createTestWrapper } from '../factory'

const wrapper = createTestWrapper(Header)

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains a "the starred ph" brand logo, and it links to the index page', async () => {
    const brandLink = wrapper.find('header > div > a:first-child')

    expect(brandLink.text()).toBe('the starred ph')
    expect(brandLink.attributes('to')).toBe('/')
  })

  it('contains a navigation link to about page', async () => {
    const brandLink = wrapper.find('nav > ul > li:first-child a')

    expect(brandLink.text()).toBe('about')
    expect(brandLink.attributes('to')).toBe('/about')
  })

  it('contains a navigation link of contribute and links out to github page', async () => {
    const brandLink = wrapper.find('nav > ul > li:last-child a')

    expect(brandLink.text()).toBe('contribute')
    expect(brandLink.attributes('href')).toBe(
      'https://github.com/rhanmiano/the-starred-ph'
    )
  })
})
