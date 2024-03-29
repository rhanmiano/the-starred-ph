import { createLocalVue, mount } from '@vue/test-utils'

import Popover from 'vue-js-popover'
import { createTestWrapper } from '../../factory'
import { initWindow } from '../../store/mock.window'
import { getRepo } from '../../mocks.data'
import ListProfile from '@/components/List/Profile'
import Item from '@/components/List/Item'

const repo = getRepo()
const localVue = createLocalVue()
localVue.use(Popover)

const options = {
  localVue,
  data() {
    return {
      listId: `${repo.id}-${repo.owner.id}`,
    }
  },
  propsData: {
    repo,
  },
  stubs: {
    ListProfile,
  },
}

describe('Item', () => {
  test('is a Vue instance', () => {
    const { mockWindow } = initWindow(768, 1000)
    const wrapper = createTestWrapper(Item, {
      ...options,
      mocks: {
        $store: {
          state: {
            window: mockWindow,
          },
        },
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it("renders github user login with a class of 'name-popover', should have a modal behavior if screen size is >= 768 on click", async () => {
    const { mockWindow } = initWindow(768, 1000)
    const wrapper = createTestWrapper(Item, {
      ...options,
      mocks: {
        $store: {
          state: {
            window: mockWindow,
          },
        },
      },
    })

    const username = wrapper.find('.name-popover')

    expect(username.exists()).toBe(true)
    expect(username.text()).toBe(repo.owner.login)
    expect(username.attributes('data-test')).toBe('popover')

    username.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.popover').exists()).toBe(true)
    expect(wrapper.find('.--modal-profile').exists()).toBe(false)

    const profile = wrapper.findComponent(ListProfile)
    expect(profile.exists()).toBe(true)
  })

  // test github user login whether it should open a modal on click
  it("renders github user login with a class of 'name-popover', should have a modal behavior if screen size is < 768 on click", async () => {
    const { mockWindow } = initWindow(700, 1000)
    const wrapper = createTestWrapper(Item, {
      ...options,
      mocks: {
        $store: {
          state: {
            window: mockWindow,
          },
        },
      },
    })

    const mockShowMethod = jest.fn()
    wrapper.vm.$refs[`${wrapper.vm.listId}`].show = mockShowMethod
    const username = wrapper.find('.name-popover')

    expect(username.exists()).toBe(true)
    expect(username.text()).toBe(repo.owner.login)
    expect(username.attributes('data-test')).toBe('modal-popover')

    username.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.--modal-profile').exists()).toBe(true)
    expect(wrapper.find('.popover').exists()).toBe(false)

    const profile = wrapper.findComponent(ListProfile)
    expect(profile.exists()).toBe(true)
  })

  it('displays repo name and it links out to its repo url', async () => {
    const { mockWindow } = initWindow(768, 1000)
    const wrapper = createTestWrapper(Item, {
      ...options,
      mocks: {
        $store: {
          state: {
            window: mockWindow,
          },
        },
      },
    })

    const repoName = wrapper.find('a.--item-repo-name')

    expect(repoName.exists()).toBe(true)
    expect(repoName.text()).toBe(repo.name)
    expect(repoName.attributes('href')).toBe(repo.url)
  })

  it('shows stargazer count with k if > 9999', async () => {
    const { mockWindow } = initWindow(768, 1000)
    const wrapper = createTestWrapper(Item, {
      ...options,
      mocks: {
        $store: {
          state: {
            window: mockWindow,
          },
        },
      },
    })

    const count = wrapper.find('span.--stars-count')

    if (repo.stargazerCount > 9999) {
      expect(wrapper.vm.stargazerCount).toContain('k')
      expect(count.text()).toContain('k')
    } else {
      expect(wrapper.vm.stargazerCount).not.toContain('k')
      expect(count.text()).not.toContain('k')
    }
  })
})
