/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

const customColors = {
  'brand-p2': '#68c2f2',
  'brand-p1': '#40a3d8',
  brand: '#207fb1',
  'brand-n1': '#0d699a',
  'brand-n2': '#025480',
  'layout-main-black': '#222222',
  'layout-main-white': '#f5f5f5',
  'layout-lc-black': '#464646',
  'layout-lc-white': '#e2e2e2',
  'denotive-error': '#c73a3a',
  'denotive-success': '#3ac770',
  'denotive-highlight': '#a2d1ff',
}

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
      colors: customColors,
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
