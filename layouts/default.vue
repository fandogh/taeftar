<template>
  <div class="app-container">
    <div class="header">
      <!--<router-link-->
      <!--v-for="city,key in cities"-->
      <!--:to="`/${key}`"-->
      <!--:key="key"-->
      <!--:exact="true"-->
      <!--class="city-link"-->
      <!--active-class="active"-->
      <!--&gt;-->
      <!--{{ city.name }}-->
      <!--</router-link>-->

      <div class="time-selector static">
        <span>به وقت</span>
        <span>{{$store.state.city.name}}</span>
      </div>

      <div class="info static" v-if="available">
        <span>اذان مغرب : </span>
        <span>{{$store.state.times.today['maghribo']}}</span>
        <br/>
        <span>اذان صبح : </span>
        <span>{{$store.state.times.today['fajro']}}</span>
      </div>
    </div>

    <nuxt></nuxt>

    <div class="logo">
      <a href="https://fandogh.org" target="_blank" rel="noopener">
        <img src="~assets/img/fandogh.png" width="50px" height="50px" alt=""/>
      </a>
    </div>
  </div>
</template>

<style>
  .city-link {
    text-decoration: none;
    color: #E39657;
    margin-right: 10px;
  }

  .city-link.active {
    border-bottom: 3px solid #E39657;
  }
</style>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'
  import Cities from '../lib/cities'

  export default {
    methods: {
      ...mapActions(['updateCity'])
    },
    computed: {
      cities() {
        return Cities
      },
      ...mapGetters(['available'])
    }
  }
</script>
