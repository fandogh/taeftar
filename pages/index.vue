<template>
  <div>
    <div class="counter">
      <div class="counter-circle" @click="toggle">
        <p class="counter-title">{{$store.state.r[0].val}}</p>
        <p class="counter-subtitle">{{$store.state.r[0].lbl}}</p>
        <p class="counter-subtitle">
          + {{$store.state.r[1].val}} {{$store.state.r[1].lbl}}</p>
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

  export default {
    created() {
      this.update();
    },
    mounted() {
      this.timer = setInterval(this.update.bind(this), 1000);
    },
    methods: {
      ...mapMutations(['update']),
      ...mapActions(['toggle']),
    }
  }
</script>
