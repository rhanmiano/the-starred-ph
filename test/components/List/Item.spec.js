import { createLocalVue, mount } from '@vue/test-utils'
import Popover from 'vue-js-popover'
import Item from '@/components/List/Item'
import ListProfile from '@/components/List/Profile'
import { createWrapper } from '../../factory'
import { initState } from '../../store/mock.window'
import { repo } from '../../mocks.data'

const localVue = createLocalVue()
localVue.use(Popover)

const mocks = {
  $moment: () => {
    return {
      format: () => jest.fn(),
    }
  },
}

let options = {
  localVue,
  data() {
    return {
      listId: `${repo.id}-${repo.owner.id}-github-profile`,
    }
  },
  propsData: {
    repo,
  },
  mocks,
  stubs: {
    ListProfile,
  },
}

describe('Item', () => {
  test('is a Vue instance', () => {
    const { state } = initState(768, 1000)
    const wrapper = mount(Item, {
      ...options,
      mocks: {
        ...mocks,
        $store: { state },
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })

  // test github user name whether it should open popover or modal on click
  it("renders github user login with a class of 'name-popover', should have a popover behavior if screen size is >= 768 on click", async () => {
    const { state } = initState(768, 1000)
    const wrapper = mount(Item, {
      ...options,
      mocks: {
        ...mocks,
        $store: { state },
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
  })

  // test github user login whether it should open a modal on click
  it("renders github user login with a class of 'name-popover', should have a modal behavior if screen size is < 768 on click", async () => {
    const { state } = initState(700, 1000)
    const wrapper = mount(Item, {
      ...options,
      mocks: {
        ...mocks,
        $store: { state },
        $modal: {
          show: () => jest.fn,
        },
      },
    })

    const username = wrapper.find('.name-popover')

    expect(username.exists()).toBe(true)
    expect(username.text()).toBe(repo.owner.login)
    expect(username.attributes('data-test')).toBe('modal-popover')

    username.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.--modal-profile').exists()).toBe(true)
    expect(wrapper.find('.popover').exists()).toBe(false)
  })
})
