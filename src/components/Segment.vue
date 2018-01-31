<template>
  <div class="segment-container">
    <h1>{{ $store.state.player1.twenty }}</h1>
    <v-btn button color="grey lighten-2" id="number" @click="scoreTwenty">20</v-btn>
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
  padding: 0;
  margin: 0;
}

#number {
  font-size: 35px;
}

.segment-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
