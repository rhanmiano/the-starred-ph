import { title, description, url, banner } from './info'

export const head = {
  title,
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'pinoy, github, philippines, most, starred',
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: url,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: title,
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'en_PH',
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: banner,
    },
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      content: '1200',
    },
    {
      hid: 'og:image:height',
      name: 'og:image:height',
      content: '628',
    },
    // twitter
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: banner,
    },
    {
      hid: 'msapplication-TileColor',
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      hid: 'msapplication-TileImage',
      name: 'msapplication-TileImage',
      content: '/ms-icon-144x144.png',
    },
    {
      hid: 'theme-color',
      name: 'keywords',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-icon-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-icon-180x180.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    },
  ],
}
