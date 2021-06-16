<template>
  <div class="container">
    <Header />
    <Nuxt />
    <!-- <AdsRectangular /> -->
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      innerWidth: 'window/innerWidth',
      innerHeight: 'window/innerHeight',
    }),
  },
  mounted() {
    console.log('here', this.$store.state.colors.colors.brand)
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight

      this.$store.dispatch('window/onResize', { innerWidth, innerHeight })

      const elPopover = document.querySelector(
        "[data-popover$='-github-profile']"
      )

      const elModal = document.querySelector('.--modal-profile button')

      // hide active popover
      if (elPopover) {
        const attr = elPopover.dataset.popover
        const span = document.querySelector(`span[data-name='${attr}']`)
        span.click()
      }

      // hide active modal
      if (elModal) {
        elModal.click()
      }
    },
  },
}
</script>
<style>
/** Default layout global styles */
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
    @apply text-xs;
    transition: opacity 200ms ease-out;
    &.__active {
      @apply text-blue-400;
    }

    &:hover {
      @apply opacity-50;
    }
  }
}
header {
  @apply w-full h-20 flex text-base justify-between content-center px-3 py-2 z-30;
  color: theme('colors.denotive-highlight');
}

/** List items styles and animation */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/** Nuxt content styles */
.dark-mode .light-img {
  display: none;
}
.dark-mode .dark-img {
  display: block;
}
.dark-img {
  display: none;
}
.light-img {
  display: block;
}

.nuxt-content {
  @apply break-words;

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    font-weight: bold;
  }

  ol,
  ul {
    li {
      padding-left: 0 !important;
      margin-left: 2rem;
    }
  }

  ul > li {
    list-style: disc;
  }

  ol > li {
    list-style: decimal;
  }

  & h2,
  & h3 {
    /* Fix anchor scrollTo */
    &::before {
      display: block;
      content: ' ';
      margin-top: -85px;
      height: 85px;
      visibility: hidden;
      pointer-events: none;
    }

    /* Style anchor links on headings added by @nuxt/content */
    & > a {
      @apply ml-5;

      &::before {
        content: '#';
        @apply text-layout-main-black font-normal text-xl leading-8 -ml-5 pr-2 absolute opacity-100;
      }

      @screen lg {
        @apply ml-0;

        &::before {
          @apply opacity-0;
        }
      }
    }
    &:hover {
      & > a::before {
        @apply opacity-100;
      }
    }
  }

  & .nuxt-content-highlight {
    @apply relative;

    /* Style filename span added by @nuxt/content */
    & > .filename {
      @apply absolute right-0 top-0 text-gray-100 z-10 font-mono text-sm tracking-tight leading-none mr-4 mt-3;
    }

    /* Add top padding to code blocks with filename */
    & > .filename + pre[class*='language-'] {
      @apply pt-8;
    }

    /* Style copy button added in `pages/_.vue` */
    & > .copy {
      @apply hidden absolute right-0 bottom-0 leading-none shadow-lg px-2 py-2 text-white bg-gray-800 text-sm uppercase rounded-md border border-white font-semibold mr-3 mb-3;

      &:hover {
        @apply bg-gray-700;
      }

      &:focus {
        @apply outline-none bg-gray-600;
      }
    }
    &:hover {
      & > .copy {
        @apply block;
      }
    }
  }

  /* Force style on pre elements */
  & pre[class*='language-'] {
    /* Make pre static so the relative goes to the parent (.nuxt-content-highlight) */
    @apply bg-gray-800 static;
  }
}
</style>
