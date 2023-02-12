import Popover from 'vue-js-popover'

import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { createTestWrapper } from '../../factory'
import { initWindow } from '../../store/mock.window'
import { getRepos } from '../../mocks.data'
import { colors as customColors } from '../../../config'
import { resourceType } from '@/helpers/constants'
import Container from '@/components/List/Container'
import ListItem from '@/components/List/Item'
import ListItemDimmer from '@/components/List/ItemDimmer'
import ListProfile from '@/components/List/Profile'
import Dimmer from '@/components/Dimmer'

const localVue = createLocalVue()
localVue.use(Popover)
localVue.use(Vuex)

const { mockWindow } = initWindow(768, 1000)
const options = {
  localVue,
  mocks: {
    $store: {
      state: {
        window: mockWindow,
      },
      getters: {
        github: {
          loading: () => false,
        },
      },
    },
  },
  stubs: {
    ListItem,
    ListItemDimmer,
    Dimmer,
    ListProfile,
  },
}

describe('Container', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      ...actions,
      getCollectedRepos: jest.fn(),
      setTopRepos: jest.fn(),
    }

    const github = {
      namespaced: true,
      actions,
      getters: {
        loading: () => false,
        type: () => resourceType.USER,
      },
    }

    const window = {
      namespaced: true,
      state: {
        window: mockWindow,
      },
    }

    const colors = {
      namespaced: true,
      state: {
        colors: {
          colors: customColors,
        },
      },
    }

    store = new Vuex.Store({
      modules: {
        github,
        window,
        colors,
      },
    })
  })

  test('is a Vue instance', () => {
    const wrapper = createTestWrapper(Container, { ...options, store })
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders ItemDimmer if repos length is zero', () => {
    const wrapper = createTestWrapper(Container, {
      ...options,
      propsData: {
        repos: [],
      },
      store,
    })

    const itemDimmer = wrapper.findAllComponents(ListItemDimmer)
    expect(itemDimmer).toHaveLength(10)
  })

  it('renders ListItem if repos length is greater than zero', () => {
    const size = 10
    const repos = getRepos(size)
    const wrapper = createTestWrapper(Container, {
      ...options,
      propsData: {
        repos,
      },
      store,
    })

    const listItem = wrapper.findAllComponents(ListItem)
    expect(listItem).toHaveLength(size)
  })
})
