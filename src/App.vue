<template>
<div>
  <div id="appHeader">
    <v-btn fab dark medium color="red accent-2" class="fab-button" @click="undo">
      <v-icon dark>undo</v-icon>
    </v-btn>
    <h1 id="title">{{ $store.state.title }}</h1>
    <v-btn fab dark medium color="green accent-2" class="fab-button" @click="redo">
      <v-icon dark>redo</v-icon>
    </v-btn>
  </div>
  <div id="scoreWrapper">
    <player-names></player-names>
    <segment segment="twenty" points=20></segment>
    <segment segment="nineteen" points=19></segment>
    <segment segment="eighteen" points=18></segment>
    <segment segment="seventeen" points=17></segment>
    <segment segment="sixteen" points=16></segment>
    <segment segment="fifteen" points=15></segment>
    <segment segment="bull" points=25 name="bull"></segment>
    <hr>
    <Scores></Scores>
    {{ $store.state.player1.allClosed }}
  </div>
</div>
</template>

<script>
import PlayerNames from './components/PlayerNames';
import Segment from './components/Segment';
import Scores from './components/Scores';

import { mapActions } from 'vuex';

export default {
  components: {
    PlayerNames: PlayerNames,
    Segment: Segment,
    Scores: Scores
  },
  name: 'app',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

hr {
  border: none;
  height: 4px;
  background-color: #2c3e50;
  margin-top: 15px;
}

#appHeader {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 90px;
  background-color: #155ea3;
  color: rgb(243, 243, 243);
  box-shadow: 0 1px 10px rgb(0, 0, 0);
}
#scoreWrapper {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr) 0.1fr 1.5fr;
  height: 85vh;
}

#title {
  text-align: center;
  align-self: center;
  margin: 0;
}

.fab-button {
  justify-self: center;
  align-self: center;
  color: #155ea3;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Styles */
  #scoreWrapper {
    margin: 0 300px;
  }

  #appHeader {
    padding: 0 380px;
  }
}
</style>
