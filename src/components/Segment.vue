<template>
  <div class="segment-container">

    <h1>{{ player1Score[segment]}}</h1>

    <v-btn button color="grey lighten-2" id="number" @click="scoreSegment({segment: segment, points: parseInt(points)})" >
      {{ points }}
      <span id="bull" v-if="name">{{ name }}</span>
    </v-btn>

    <h1>{{ player2Score[segment] }}</h1>

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

#bull {
  font-size: 25px;
  padding-left: 5px;
}

.segment-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
