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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/manifest',
    '@nuxtjs/offline',
    {
      src: '@nuxtjs/google-analytics',
      options: {
        ua: 'UA-79535343-1'
      }
    }
  ]

}
