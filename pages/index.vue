<template>
  <main class="w-screen m-auto sm:w-3/4">
    <Banner :title="banner.title" :kicker="banner.kicker" />
    <ListContainer :repos="topRepos" />
  </main>
</template>

<script>
// import { orderBy } from 'natural-orderby'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      repos: [],
      collectedRepos: [],
      usersCountPhilippines: null,
      usersCountPH: null,
      banner: {
        title:
          'Top 10 most starred Github repositories initiated by developers located in the Philippines',
        kicker:
          'Are you a filipino innovator, and ever wondering where to find inspirations and people to follow? Here comes a list',
      },
    }
  },
  computed: {
    ...mapGetters({
      topRepos: 'github/topRepos',
    }),
  },
  async mounted() {
    // write session storage if not set yet
    if (!sessionStorage.getItem('tph-github-repos')) {
      await this.getCollectedRepos({ location: 'philippines', first: 100 })
      await this.getCollectedRepos({ location: 'ph', first: 100 })
      await sessionStorage.setItem(
        'tph-github-repos',
        JSON.stringify(this.topRepos)
      )
    } else {
      const repos = await JSON.parse(sessionStorage.getItem('tph-github-repos'))
      this.setTopRepos(repos)
    }
  },
  methods: {
    ...mapActions({
      getCollectedRepos: 'github/getCollectedRepos',
      setTopRepos: 'github/setTopRepos',
    }),
  },
}
</script>

<style lang="scss"></style>
