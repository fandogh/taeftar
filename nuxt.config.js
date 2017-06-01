module.exports = {
  loading: {color: '#E39657'},
  head: {
    title: 'تا افطار',
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },
  css: [
    '~assets/css/circle.css',
    '~assets/css/main.css'
  ],
  build: {
    extractCSS: true
  },
  ssr: false,
  modules: [
    require('@nuxtjs/axios'),
    require('@nuxtjs/manifest'),
    require('@nuxtjs/offline'),
    // [require('@nuxtjs/localtunnel'), {subdomain: 'taeftar'}],
    {
      src: require('@nuxtjs/google-analytics'),
      options: {
        ua: 'UA-79535343-1'
      }
    }
  ]

}
