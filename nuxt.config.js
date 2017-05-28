module.exports = {
  loading: {color: '#3B8070'},
  head: {
    script: [
      {src: 'https://www.google.com/jsapi'}
    ]
  },
  css: [
    '~assets/css/circle.css',
    '~assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/axios',
    {
      src: '@nuxtjs/google-analytics',
      options: {
        ua: 'UA-79535343-1'
      }
    }
  ]

}
