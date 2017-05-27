<template>
  <div>
    <div class="counter">
      <div class="counter-circle" onClick="toggle">
        <p class="counter-title">{{$store.state.remaining.r[0].val}}</p>
        <p class="counter-subtitle">{{$store.state.remaining.r[0].lbl}}</p>
        <p class="counter-subtitle">
          + {{$store.state.remaining.r[1].val}} {{$store.state.remaining.r[1].lbl}}</p>
        <p class="counter-desc">
          <span>مونده تا </span>
          {{$store.state.remaining.to}}
        </p>
        <img class="counter-img" src="~assets/img/eftar.png"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    mount() {
      this.timer = setInterval((this.tick).bind(this), 1000);
    },
  }
</script>
