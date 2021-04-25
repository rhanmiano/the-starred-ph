<template>
  <main class="w-screen m-auto sm:w-3/4">
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
        kicker: 'See top works of our pinoy developers and creatives',
      },
    }
  },
}
</script>

<style>
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
