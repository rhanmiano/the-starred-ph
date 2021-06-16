import ListProfile from '@/components/List/Profile'
import { createTestWrapper } from '../../factory'
import { getRepo } from '../../mocks.data'
import { colors } from '../../../config'

const repo = getRepo()
const wrapper = createTestWrapper(ListProfile, {
  propsData: {
    profile: repo.owner,
    repoId: repo.id,
  },
  mocks: {
    $store: {
      state: {
        colors,
      },
    },
  },
})

describe('ListProfile', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
