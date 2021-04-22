<template>
  <div class="container">
    <Header />
    <main class="w-screen m-auto sm:w-3/4">
      <Banner />
      <ListContainer :repos="repos" />
    </main>
  </div>
</template>

<script>
import { orderBy } from 'natural-orderby'

const GET_USER_COUNT = (location) => {
  return {
    query: `query {
      search(type: USER query: "location:${location}" first: 1) {
        userCount
      }
    }`,
  }
}

const GET_REPOS = (location, first) => {
  return {
    query: `query
    {
      search(type: USER, query: "location:${location} sort:followers-desc followers:>=10", first: ${first}) {
        userCount
        edges {
          node {
            __typename
            ... on User {
              repositories(privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}, first: 2) {
                edges {
                  node {
                    id
                    name
                    url
                    description
                    createdAt
                    updatedAt
                    stargazerCount
                    owner {
                      ... on User {
                        avatarUrl
                        company
                        location
                        websiteUrl
                        name
                        login
                        followers(first: 1) {
                          totalCount
                        }
                      }
                    }
                    primaryLanguage {
                      color
                      name
                    }
                  }
                }
                totalCount
              }
            }
          }
        }
      }
    }`,
  }
}

export default {
  data() {
    return {
      repos: [],
      collectedRepos: [],
      usersCountPhilippines: null,
      usersCountPH: null,
    }
  },
  async mounted() {
    this.$axios.setHeader('content-type', 'application/json')
    this.$axios.setHeader(
      'authorization',
      `bearer ${process.env.GH_GQL_ACCESS_KEY}`
    )

    await this.getRepos('philippines', 100).then(({ data }) => {
      console.log('getRepos in philippines', data)

      data.search.edges.forEach((edge) => {
        this.collectedRepos = [
          ...this.collectedRepos,
          ...edge.node.repositories.edges.map((repo) => repo.node),
        ]
      })
    })

    await this.getRepos('ph', 100).then(({ data }) => {
      console.log('getRepos in ph', data)

      data.search.edges.forEach((edge) => {
        this.collectedRepos = [
          ...this.collectedRepos,
          ...edge.node.repositories.edges.map((repo) => repo.node),
        ]
      })
    })

    await console.log('this.collectedRepos', this.collectedRepos)
    this.repos = orderBy(
      this.collectedRepos,
      [(v) => v.stargazerCount],
      ['desc']
    ).slice(0, 10)

    await console.log('this.repos', this.repos)
  },
  methods: {
    async getRepos(location, first) {
      const data = await this.$axios.$post(
        `${process.env.GH_GQL_API_URL}`,
        GET_REPOS(location, first)
      )

      return data
    },

    async getUserCount(location) {
      const { data } = await this.$axios.$post(
        `${process.env.GH_GQL_API_URL}`,
        GET_USER_COUNT(location)
      )

      return data
    },
  },
}
</script>

<style lang="scss">
ul.nav-wrapper {
  position: relative;
  padding-right: 10px;
  .nav-list {
    display: inline-block;
    font-weight: bolder;
    margin-right: 15px;
    @apply text-sm font-thin;
    &.__active {
      @apply text-blue-400;
    }
  }
}
header {
  @apply w-full h-20 flex justify-between content-center px-3 py-2 z-30;
  color: theme('colors.denotive-highlight');
}
</style>
