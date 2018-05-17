export default {
  mode: 'spa',

  loading: {
    color: '#E39657'
  },

  manifest: {
    name: 'تا افطار',
    lang: 'fa',
    version: '2.0.0',
    short_name: 'تا افطار',
    description: 'زمان شمار افطار',
    theme_color: '#E39657'
  },

  css: [
    '~assets/css/circle.css',
    '~assets/css/main.css'
  ],

  build: {
    extractCSS: true
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-79535343-1' }]
  ]
}
