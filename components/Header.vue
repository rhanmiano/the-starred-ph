<template>
  <header class="bg-white">
    <div class="self-center pl-6">the starred ph</div>
    <nav class="h-100 self-center">
      <ul class="nav-wrapper flex content-center">
        <li class="nav-list"><nuxt-link to="/evenat">about</nuxt-link></li>
        <li class="nav-list">
          <nuxt-link to="/profile">contribute</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      hello: 'asdasdasd',
      asd: 'asiduasid',
      hot: 'galaw',
    }
  },
}
</script>

<style lang="scss">
ul.nav-wrapper {
  position: relative;
  padding-right: 10px;
  .nav-list {
    display: inline-block;
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
