export const state = () => ({
  innerWidth: 0,
  innerHeight: 0,
})

export const mutations = {
  ON_RESIZE(state, { innerWidth, innerHeight }) {
    console.log(`mutate innerWidth: ${innerWidth}, innerHeight: ${innerHeight}`)
    state.innerWidth = innerWidth
    state.innerHeight = innerHeight
  },
  SET_INNER_WIDTH(state, value) {
    state.innerWidth = value
  },
  SET_INNER_HEIGHT(state, value) {
    state.innerHeight = value
  },
}

export const actions = {
  onResize({ commit }, { innerWidth, innerHeight }) {
    console.log(
      `commiting change to innerWidth: ${innerWidth}, innerHeight: ${innerHeight}`
    )
    commit('ON_RESIZE', { innerWidth, innerHeight })
  },
}
