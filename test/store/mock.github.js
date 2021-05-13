export const getMockStore = (topRepos = [], collectedRepos = []) => {
  return {
    mocks: {
      $store: {
        topRepos: [...topRepos],
        collectedRepos: [...collectedRepos],
      },
    },
  }
}
