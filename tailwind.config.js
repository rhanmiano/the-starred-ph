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
  ],
  purge: false,
}
