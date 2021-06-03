<template>
  <main class="w-full m-auto sm:w-5/6 md:w-3/4">
    <Banner :title="banner.title" :kicker="banner.kicker" />
    <article
      class="bg-white block rounded-md w-full p-8 mt-16 shadow-md prose-sm prose-blue"
    >
      <nuxt-content :document="about" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return {
      about,
    }
  },
  data() {
    return {
      banner: {
        title: 'The Starred PH',
        kicker:
          'See top works of our fellow Filipino developers / creatives / potatoes',
      },
    }
  },
}
</script>

<style></style>
