import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

const githubLink = 'https://github.com/rhanmiano/the-starred-ph'
const portfolioLink = 'https://rhanmiano.me'
const mockLinks = [{ link: '/', text: 'Home', target: '', rel: '' }]
const wrapper = mount(Footer, {
  data() {
    return {
      curYear: 2022,
      sitemap: mockLinks,
    }
  },
})
describe('Footer', () => {
  let links
  beforeEach(() => {
    links = wrapper.findAll('a.--link')
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains a "the starred ph" brand logo, and it links to github repo page', async () => {
    expect(links.at(0).text()).toBe('the starred ph')
    expect(links.at(0).attributes('href')).toBe(githubLink)
  })

  it('shows current year if curYear is greater than 2021', async () => {
    const curYear = wrapper.find('span.curyear')

    expect(curYear.exists()).toBe(true)
  })

  it("contains a link to Rhan Miano's website", async () => {
    expect(links.at(1).text()).toBe('rhanmiano')
    expect(links.at(1).attributes('href')).toBe(portfolioLink)
  })

  it('contains a sitemap', async () => {
    const sitemap = wrapper.find('ul.sitemap')
    expect(sitemap.exists()).toBeTruthy()

    const siteMapLinks = sitemap.findAll('li')
    expect(siteMapLinks.length).toEqual(mockLinks.length)
    expect(siteMapLinks.at(0).find('a').text()).toBe(mockLinks[0].text)
    expect(siteMapLinks.at(0).find('a').attributes('href')).toBe(
      mockLinks[0].link
    )
  })
})
