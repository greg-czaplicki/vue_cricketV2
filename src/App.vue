<template>
  <div id="app">
    <h2 @click="undo">undo</h2>
    <h1 id="title">{{ $store.state.title }}</h1>
    <player-names></player-names>
    <segment></segment>
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
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 10px;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px;
  grid-auto-rows: 80px;
}

#title {
  justify-self: center;
  margin: 0;
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
