import Popover from 'vue-js-popover'

import { createLocalVue, mount } from '@vue/test-utils'
import Container from '@/components/List/Container'
import ListItem from '@/components/List/Item'
import ListItemDimmer from '@/components/List/ItemDimmer'
import ListProfile from '@/components/List/Profile'
import Dimmer from '@/components/Dimmer'
import { initState } from '../../store/mock.window'
import { getRepos } from '../../mocks.data'

const localVue = createLocalVue()
localVue.use(Popover)

const { state } = initState(768, 1000)
const mocks = {
  $moment: () => {
    return {
      format: () => jest.fn(),
    }
  },
}
const options = {
  localVue,
  mocks: {
    ...mocks,
    $store: { state },
  },
  stubs: {
    ListItem,
    ListItemDimmer,
    Dimmer,
    ListProfile,
  },
}

describe('Container', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Container, options)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders ItemDimmer if repos length is zero', async () => {
    const wrapper = mount(Container, {
      ...options,
      propsData: {
        repos: [],
      },
    })
    const itemDimmer = wrapper.findAllComponents(ListItemDimmer)
    expect(itemDimmer).toHaveLength(10)
  })

  it('renders ListItem if repos length is greater than zero', async () => {
    const size = 10
    const repos = getRepos(size)
    const wrapper = mount(Container, {
      ...options,
      propsData: {
        repos,
      },
    })

    const listItem = wrapper.findAllComponents(ListItem)
    expect(listItem).toHaveLength(size)
  })
})
