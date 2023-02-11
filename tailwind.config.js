import { colors } from './config'
const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'pt-sans': [
          '"PT Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors,
      fontSize: {
        xxs: '.6rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.4xl') },
        h2: { fontSize: config('theme.fontSize.3xl') },
        h3: { fontSize: config('theme.fontSize.xl') },
      })
    }),
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: [
      `./public/**/*.html`,
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.html',
      './src/**/*.md',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'nuxt-progress',
        '__nuxt',
        '__layout',
      ],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
        /^nuxt-link(|-exact)-active$/, // Nuxt link classes
        /^(?!cursor-move).+-move$/, // Move transitions
        /data-v-.*/, // Keep scoped styles
      ],
      extractors: [
        {
          extractor: (content) => {
            const contentWithoutStyleBlocks = content.replace(
              /<style[^]+?<\/style>/gi,
              ''
            )
            return (
              contentWithoutStyleBlocks.match(
                /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
              ) || []
            )
          },
          extensions: ['vue', 'js', 'md', 'html'],
        },
      ],
    },
  },
}
