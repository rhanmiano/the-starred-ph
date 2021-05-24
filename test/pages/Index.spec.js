import { createLocalVue, mount } from '@vue/test-utils'
import Index from '@/pages/index'
import Popover from 'vue-js-popover'
import Banner from '@/components/Banner'
import ListContainer from '@/components/List/Container'
import ListItem from '@/components/List/Item'
import ListItemDimmer from '@/components/List/ItemDimmer'
import ListProfile from '@/components/List/Profile'
import ItemDimmer from '@/components/List/ItemDimmer'
import Dimmer from '@/components/Dimmer'
import { initState } from '../store/mock.window'
import { getRepos } from '../mocks.data'
import { orderBy } from 'natural-orderby'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Popover)
localVue.use(Vuex)

const { state } = initState(768, 1000)

// mock computed topRepos from github store
const topRepos = orderBy(
  getRepos(100),
  [(v) => v.stargazerCount],
  ['desc']
).slice(0, 10)

const mocks = {
  $moment: () => {
    return {
      format: () => jest.fn(),
    }
  },
}

let options = {
  localVue,
  computed: {
    topRepos: () => topRepos,
  },
  mocks: {
    ...mocks,
  },
  stubs: {
    Banner,
    ListContainer,
    ListItem,
    ListItemDimmer,
    Dimmer,
    ItemDimmer,
    ListProfile,
  },
}

describe('Index', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      ...actions,
      getCollectedRepos: jest.fn(),
      setTopRepos: jest.fn(),
    }

    let github = {
      namespaced: true,
      actions,
    }

    let window = {
      namespaced: true,
      state,
    }

    store = new Vuex.Store({
      modules: {
        github,
        window,
      },
    })

    wrapper = mount(Index, { ...options, store })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders Banner component', async () => {
    const banner = wrapper.findComponent(Banner)

    expect(banner.exists()).toBe(true)
  })

  //

  it('renders ListContainer component', async () => {
    const listContainer = wrapper.findAllComponents(ListContainer)

    expect(listContainer.exists()).toBe(true)
    expect(listContainer.length).toEqual(1)
  })

  it('renders 10 List item components', async () => {
    const list = wrapper.findAllComponents(ListItem)

    expect(list.exists()).toBe(true)
    expect(list.length).toEqual(wrapper.vm.topRepos.length)
  })

  test('item[0].stargazerCount is greater than item[1].stargazerCount and so on', async () => {
    const list = wrapper.findAllComponents(ListItem)

    for (let i = 0; i < list.length; i++) {
      const stargazerCount = list.at(i).vm.numStarGazerCount

      expect(stargazerCount).toBeDefined()

      if (i > 1) {
        const prevStargazerCount = list.at(i - 1).vm.numStarGazerCount

        // check if current stargazerCount is greater than prevStargazerCount
        expect(prevStargazerCount).toBeGreaterThanOrEqual(stargazerCount)
      }
    }
  })
})
