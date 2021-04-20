<template>
  <div class="container">
    <Header />
    <Banner />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Header,
    Banner,
  },
  data() {
    return {}
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
    @apply text-sm;
    &.__active {
      @apply text-blue-400;
    }
  }
}
header {
  @apply w-full h-20 flex justify-between content-center shadow-md px-3 py-2 z-30;
}
</style>
