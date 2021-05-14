import { createWrapper } from '../../factory'
import Container from '@/components/List/Container'
import ListItem from '@/components/List/Item'
import ListItemDimmer from '@/components/List/ItemDimmer'
import ListProfile from '@/components/List/Profile'
import Dimmer from '@/components/Dimmer'
import { initState } from '../../store/mock.window'
import { getRepos } from '../../mocks.data'

const { state } = initState(768, 1000)
let options = {
  propsData: {
    repos: [],
  },
  mocks: {
    $store: { state },
  },
  stubs: {
    ListItem,
    ListItemDimmer,
    Dimmer,
    ListProfile,
  },
}

const wrapper = createWrapper(Container, options)

describe('Container', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders ItemDimmer if repos length is zero', async () => {
    const itemDimmer = wrapper.findAllComponents(ListItemDimmer)
    expect(itemDimmer).toHaveLength(10)
  })

  it('renders ListItem if repos length is zero', async () => {
    wrapper.setProps({ repos: getRepos(10) })
    wrapper.vm.$nextTick()
    console.log(wrapper.props('repos'))
    const listItem = wrapper.findAllComponents(ListItem)
    expect(listItem).toHaveLength(10)
  })
})
