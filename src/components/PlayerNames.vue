<template>
  <div id="container">

    <h1 id="player1" :class="{isActive: $store.state.player1.isActive}" @click="togglePlayer1">
      {{ $store.state.player1.name }}
    </h1>

    <h2 id="vs">VS.</h2>

    <h1 id="player2" :class="{isActive: $store.state.player2.isActive}" @click="togglePlayer2">
      {{ $store.state.player2.name }}
    </h1>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['togglePlayer1', 'togglePlayer2'])
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
  align-items: center;
}

h1,
h2 {
  margin: 0;
}

#container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.isActive {
  background-color: #69f0ae;
  padding: 4px;
  border-radius: 3px;
}

#vs {
  font-size: 30px;
}
</style>
