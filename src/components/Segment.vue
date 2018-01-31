<template>
  <div class="segment-container">
    <h1>{{ $store.state.player1.twenty }}</h1>
    <h1 id="number" @click="scoreTwenty">20</h1>
    <h1>{{ $store.state.player2.twenty }}</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['scoreTwenty'])
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
  align-items: center;
}

.segment-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
