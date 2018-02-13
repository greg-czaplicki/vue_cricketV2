<template>
  <div class="segment-container">

    <div :class="{open: openSegmentP1(segment), warn: warnSegmentP1(segment), closed: closed(segment)}" style="height: 40px;display: grid;">
      <h1 v-if="player1Closed[segment] === 0" style="color: lightgray">-</h1>
      <img v-show="player1Closed[segment] === 1" :src="slash">
      <img v-show="player1Closed[segment] === 2" :src="x">
      <img v-show="player1Closed[segment] === 3 && player1Score[segment] === 0" :src="circlex">
      <h1 v-show="player1Score[segment] > 0">{{ player1Score[segment] }}</h1>
    </div>

    <v-btn button color="grey lighten-2" id="number" @click="scoreSegment({segment: segment, points: parseInt(points)}), checkWinner" :class="{closed: closed(segment)}" >
      <span v-if="points && !name">{{ points }}</span>
      <span id="bull" v-if="name">{{ name }}</span>
    </v-btn>

    <div :class="{open: openSegmentP2(segment), warn: warnSegmentP2(segment), closed: closed(segment)}" style="height: 40px;display: grid;">
      <h1 v-if="player2Closed[segment] === 0" style="color: lightgray">-</h1>
      <img v-show="player2Closed[segment] === 1" :src="slash">
      <img v-show="player2Closed[segment] === 2" :src="x">
      <img v-show="player2Closed[segment] === 3 && player2Score[segment] === 0" :src="circlex">
      <h1 v-show="player2Score[segment] > 0">{{ player2Score[segment] }}</h1>
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
    ...mapGetters([
      'player1Score',
      'player2Score',
      'player1Closed',
      'player2Closed',
      'checkWinner',
      'slash',
      'x',
      'circlex'
    ])
  },
  methods: {
    ...mapActions(['scoreSegment']),
    openSegmentP1(num) {
      if (this.$store.state.player1.closed[this.segment] === 3 && this.$store.state.player2.closed[this.segment] < 3) {
        return true;
      } else false;
    },
    openSegmentP2(num) {
      if (this.$store.state.player2.closed[this.segment] === 3 && this.$store.state.player1.closed[this.segment] < 3) {
        return true;
      } else false;
    },
    warnSegmentP1(num) {
      if (this.$store.state.player2.closed[this.segment] === 3 && this.$store.state.player1.closed[this.segment] < 3) {
        return true;
      } else false;
    },
    warnSegmentP2(num) {
      if (this.$store.state.player1.closed[this.segment] === 3 && this.$store.state.player2.closed[this.segment] < 3) {
        return true;
      } else false;
    },
    closed(num) {
      if (
        this.$store.state.player1.closed[this.segment] === 3 &&
        this.$store.state.player2.closed[this.segment] === 3
      ) {
        return true;
      } else false;
    }
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

h1,
img {
  align-self: center;
  justify-self: center;
}

#number {
  font-size: 35px;
  margin: 0 5px;
}

.open {
  border: 2px solid #69f0ae;
  border-radius: 3px;
}

.warn {
  border: 2px solid rgb(255, 118, 118);
  padding: 2.5px;
  border-radius: 3px;
}

.closed {
  background-color: rgb(226, 226, 226);
  color: gray;
  border-radius: 3px;

  img {
    filter: opacity(50%);
  }
}

.segment-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
