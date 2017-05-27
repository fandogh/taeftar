<template>
  <div class="app-container">
    <div class="header">
      <div class="time-selector">
        <span>به وقت</span>
        <span>تهران</span>
      </div>
    </div>

    <nuxt></nuxt>

    <div class="footer">
      <div class="logo">
        <a href="https://fandogh.org" target="_blank">
          <img src="~assets/img/fandogh.png" width="50px" height="50px"/>
        </a>
      </div>
      <div class="info">
        <span>اذان مغرب : </span>
        <span>{{$store.state.times.today['maghribo']}}</span>
        <br/>
        <span>اذان صبح : </span>
        <span>{{$store.state.times.today['fajro']}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
