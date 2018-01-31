<template>
  <div class="segment-container">
    <h1>{{ player1Score.twenty }}</h1>
    <v-btn button color="grey lighten-2" id="number" @click="scoreSegment({segment: 'twenty', points: 20})">20</v-btn>
    <h1>{{ player2Score.twenty }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['player1Score', 'player2Score'])
  },
  methods: {
    ...mapActions(['scoreSegment'])
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
