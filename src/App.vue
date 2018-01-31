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
  <div class="scoreWrapper">
    <player-names></player-names>
    <segment></segment>
  </div>
</div>
</template>

<script>
import PlayerNames from './components/PlayerNames';
import Segment from './components/Segment';

import { mapActions } from 'vuex';

export default {
  components: {
    PlayerNames: PlayerNames,
    Segment: Segment
  },
  name: 'app',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
  padding: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#appHeader {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 70px;
  padding-bottom: 10px;
}
#scoreWrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px;
  // grid-auto-rows: 60px;
}

#title {
  text-align: center;
  align-self: center;
  margin: 0;
}

.fab-button {
  justify-self: center;
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
</style>
