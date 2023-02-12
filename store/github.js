import { orderBy } from 'natural-orderby'
import { GET_REPOS_BY_USER, GET_REPOS_BY_ORG } from '@/gql/github/queries'
import { resourceType } from '@/helpers/constants'

export const state = () => ({
  type: resourceType.USER,
  topRepos: [],
  collectedRepos: [],
  loading: false,
})

export const mutations = {
  SET_COLLECTED_REPOS(state, repos) {
    state.collectedRepos = [...repos]
  },
  SET_TOP_REPOS(state, repos) {
    state.topRepos = repos
  },
  SET_TYPE(state, type) {
    state.type = type
  },
  SET_LOADING(state, value) {
    state.loading = value
  },
}

export const actions = {
  async getCollectedRepos({ commit }, { type }) {
    commit('SET_LOADING', true)
    commit('SET_COLLECTED_REPOS', [])

    let repos = []
    const query =
      type === resourceType.USER ? GET_REPOS_BY_USER() : GET_REPOS_BY_ORG()

    this.$axios.setHeader('content-type', 'application/json')
    this.$axios.setHeader(
      'authorization',
      `bearer ${process.env.GH_GQL_ACCESS_KEY}`
    )

    await this.$axios
      .$post(`${process.env.GH_GQL_API_URL}`, query)
      .then(({ data }) => {
        data.search.edges.forEach((edge) => {
          const repoCount = edge.node?.repositories?.totalCount ?? 0
          if (repoCount > 0) {
            repos = [
              ...repos,
              ...edge.node.repositories.edges.map((repo) => {
                repo.node.owner.repoCount = repoCount

                return repo.node
              }),
            ]
          }
        })

        commit('SET_COLLECTED_REPOS', repos)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  setTopRepos({ commit }, repos) {
    commit('SET_TOP_REPOS', repos)
  },

  setType({ commit }, type) {
    commit('SET_TYPE', type)
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
  type(state) {
    return state.type
  },
  loading(state) {
    return state.loading
  },
}
