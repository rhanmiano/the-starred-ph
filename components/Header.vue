<template>
  <div>
    <div class="trapezoidal-bg"></div>
    <header class="bg-transparent">
      <div class="self-center pl-6 font-pt-sans font-bold">
        <nuxt-link to="/">the starred ph</nuxt-link>
      </div>
      <nav class="h-100 self-center">
        <ul class="nav-wrapper flex content-center">
          <li class="nav-list"><nuxt-link to="/about">about</nuxt-link></li>
          <li class="nav-list">
            <a
              href="https://github.com/rhanmiano/the-starred-ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribute
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.trapezoidal-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #151d7e;
  background: linear-gradient(190deg, #151d7e 20%, #207fb1 130%);
  // transform: skew(-45deg, 19deg) translate(-161px, -243px) scale(1.5);
  height: 720px;
  width: 100%;

  @media screen and (min-width: 640px) {
    transform: skew(-45deg, 19deg) translate(-175px, -190px) scale(1.2);
  }

  @media screen and (min-width: 768px) {
    transform: skew(-45deg, 19deg) translate(-115px, -215px) scale(1.2);
  }
}
</style>
