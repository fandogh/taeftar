export default {
  mode: 'spa',

  loading: {
    color: '#E39657'
  },

  manifest: {
    name: 'تا افطار',
    lang: 'e',
    version: '2.0.0',
    short_name: 'تا افطار',
    description: 'محاسبه میزان زمان باقی مانده تا افطار و سحر',
    theme_color: '#E39657',
    start_url: "/?standalone=true&utm_source=app"
  },
  
  meta: {
    nativeUI: true
  },

  head: {
    title: 'تا افطار - چقد مونده تا افطار'
  },

  css: [
    '~assets/css/circle.css',
    '~assets/css/main.css'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-79535343-1' }]
  ]
}
