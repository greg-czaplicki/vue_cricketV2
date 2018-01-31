<template>
  <div class="segment-container">

    <div>
      <h1 v-if="player1Closed[segment] === 0">{{ player1Score[segment] }}</h1>
      <img v-else-if="player1Closed[segment] === 1" src="../assets/slash.png" style="height: 20px; width: 20px;">
      <img v-else-if="player1Closed[segment] === 2" src="../assets/x.png" style="height: 20px; width: 20px;">
      <img v-else-if="player1Closed[segment] === 3 && player1Score[segment] ===0" src="../assets/circlex.png" style="height: 40px; width: 40px;">
      <h1 v-else style="font-weight: bold">{{ player1Score[segment] }}</h1>
    </div>

    <v-btn button color="grey lighten-2" id="number" @click="scoreSegment({segment: segment, points: parseInt(points)})" >
      <span v-if="points && !name">{{ points }}</span>
      <span id="bull" v-if="name">{{ name }}</span>
    </v-btn>

    <div>
      <h1 v-if="player2Closed[segment] === 0">{{ player2Score[segment] }}</h1>
      <img v-else-if="player2Closed[segment] === 1" src="../assets/slash.png" style="height: 20px; width: 20px;">
      <img v-else-if="player2Closed[segment] === 2" src="../assets/x.png" style="height: 20px; width: 20px;">
      <img v-else-if="player2Closed[segment] === 3 && player2Score[segment] ===0" src="../assets/circlex.png" style="height: 40px; width: 40px;">
      <h1 v-else>{{ player2Score[segment] }}</h1>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['segment', 'points', 'name'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['player1Score', 'player2Score', 'player1Closed', 'player2Closed'])
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
