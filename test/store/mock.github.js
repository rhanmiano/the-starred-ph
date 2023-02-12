import { resourceType } from '@/helpers/constants'

export const getMockStore = (topRepos = [], collectedRepos = []) => {
  return {
    mocks: {
      $store: {
        topRepos: [...topRepos],
        collectedRepos: [...collectedRepos],
        type: resourceType.USER,
        loading: 'false',
      },
    },
  }
}
