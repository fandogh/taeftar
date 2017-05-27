<template>
  <div>
    <div class="counter static">
      <div class="counter-circle" @click="toggle">
        <p class="counter-title">{{$store.state.r[0].val}}</p>
        <p class="counter-subtitle">{{$store.state.r[0].lbl}}</p>
        <template v-if="$store.state.r[1].val">
          <p class="counter-subtitle">
            + {{$store.state.r[1].val}} {{$store.state.r[1].lbl}}</p>
        </template>
        <p class="counter-desc">
          <span>مونده تا </span>
          {{$store.state.to}}
        </p>
        <img class="counter-img" src="~assets/img/eftar.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex'
  import Cities from '../lib/cities'

  export default {
    async fetch({params: {city}, store, redirect}) {
      if (!city) {
        return redirect('/tehran')
      }
      await store.dispatch('updateCity', city);
    },
    validate({params: {city = 'tehran'}}) {
      return Boolean(Cities[city]);
    },
    mounted() {
      this.timer = setInterval(this.update.bind(this), 1000);
    },
    methods: {
      ...mapMutations(['update']),
      ...mapActions(['toggle', 'updateCity']),
    }
  }
</script>
