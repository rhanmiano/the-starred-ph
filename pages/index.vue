<template>
  <main class="w-full m-auto sm:w-5/6 md:w-3/4">
    <Banner :title="banner.title" :kicker="banner.kicker" />
    <ListContainer :repos="topRepos" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { resourceType } from '@/helpers/constants'

export default {
  data() {
    return {
      banner: {
        title: 'Top 10 most starred Github repositories in the Philippines',
        kicker:
          'Are you an innovator and wondering where to find inspirations and people to follow? Here comes a short list',
      },
    }
  },
  computed: {
    ...mapGetters({
      topRepos: 'github/topRepos',
      type: 'github/type',
    }),
  },
  watch: {
    type() {
      this.collectRepos()
    },
  },
  mounted() {
    this.collectRepos()
  },
  methods: {
    ...mapActions({
      getCollectedRepos: 'github/getCollectedRepos',
      setTopRepos: 'github/setTopRepos',
    }),
    async collectRepos() {
      let key = process.env.SESSION_USER_KEY_NAME

      if (this.type === resourceType.ORG) {
        key = process.env.SESSION_ORG_KEY_NAME
      }

      if (!sessionStorage.getItem(key)) {
        this.setTopRepos([])
        await this.getCollectedRepos({
          type: this.type,
        })
        sessionStorage.setItem(key, JSON.stringify(this.topRepos))
      } else {
        const repos = await JSON.parse(sessionStorage.getItem(key))
        this.setTopRepos(repos)
      }
    },
  },
}
</script>

<style lang="scss"></style>
