import { GET_REPOS } from '@/gql/github/queries'
import { orderBy } from 'natural-orderby'

export const state = () => ({
  topRepos: [],
  collectedRepos: [],
})

export const mutations = {
  SET_COLLECTED_REPOS(state, repos) {
    state.collectedRepos = [...state.collectedRepos, ...repos]
  },
  SET_TOP_REPOS(state, repos) {
    state.topRepos = repos
  },
}

export const actions = {
  async getCollectedRepos({ commit }, { location, first }) {
    console.log('first', location, first)
    let repos = []
    this.$axios.setHeader('content-type', 'application/json')
    this.$axios.setHeader(
      'authorization',
      `bearer ${process.env.GH_GQL_ACCESS_KEY}`
    )
    await this.$axios
      .$post(`${process.env.GH_GQL_API_URL}`, GET_REPOS(location, first))
      .then(({ data }) => {
        console.log(`getRepos in ${location}`, data)

        data.search.edges.forEach((edge) => {
          if (edge.node.repositories.totalCount > 0) {
            repos = [
              ...repos,
              ...edge.node.repositories.edges.map((repo) => repo.node),
            ]
          }
        })

        commit('SET_COLLECTED_REPOS', repos)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  setTopRepos({ commit }, repos) {
    commit('SET_TOP_REPOS', repos)
  },
}

export const getters = {
  topRepos(state) {
    return state.topRepos && state.topRepos.length
      ? state.topRepos
      : state.collectedRepos.length
      ? orderBy(
          state.collectedRepos,
          [(v) => v.stargazerCount],
          ['desc']
        ).slice(0, 10)
      : []
  },
}
