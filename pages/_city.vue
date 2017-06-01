<template>
  <div>
    <div class="counter static">
      <div class="counter-circle" @click="toggle" v-if="available">
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
        <img class="counter-img" src="~assets/img/eftar.png" alt=""/>
      </div>
      <div v-else>
        <span>در حال دریافت موقعیت...</span>
      </div>

      <div class="zekr">
        <p>
          <strong>{{$store.state.zekr.arabic}}</strong>
        </p>
        <p>
          {{$store.state.zekr.persian}}
          (<span>دعای روز</span>
          {{$store.state.zekr.day}})
        </p>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'
  import Cities from '../lib/cities'

  export default {
    validate({params: {city = ''}}) {
      return Boolean(Cities[city]);
    },
    async mounted() {
      await this.updateCity(this.$route.params.city || '')
      this.timer = setInterval(this.update.bind(this), 1000);
    },
    methods: {
      ...mapMutations(['update']),
      ...mapActions(['toggle', 'updateCity']),
    },
    computed: {
      ...mapGetters(['available']),
    }
  }
</script>
