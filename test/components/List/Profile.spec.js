import { mount } from '@vue/test-utils'
import { createWrapper } from '../../factory'
import ListProfile from '@/components/List/Profile'
import { repo } from '../../mocks.data'

const wrapper = createWrapper(ListProfile, {
  propsData: {
    profile: repo.owner,
    repoId: repo.id,
  },
})

describe('ListProfile', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
