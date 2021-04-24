<template>
  <div class="container">
    <Header />
    <Nuxt />
    <AdsRectangular />
    <Footer />
  </div>
</template>

<style>
/* 
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
