export const state = () => ({
  innerWidth: 0,
  innerHeight: 0,
})

export const mutations = {
  ON_RESIZE(state, { innerWidth, innerHeight }) {
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
    commit('ON_RESIZE', { innerWidth, innerHeight })
  },
}
