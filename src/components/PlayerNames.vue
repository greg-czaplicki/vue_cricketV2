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
#container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
}

#player1 {
  grid-column: 2;
  padding: 22px 0;
  margin: 0;
  text-align: center;
  align-self: center;
}

#player2 {
  padding: 22px 0;
  margin: 0;
  text-align: center;
  align-self: center;
}

#vs {
  text-align: center;
  margin: 0;
  align-self: center;
}

.isActive {
  background-color: #baffe0;
  border: 1px solid rgb(91, 182, 131);
  border-radius: 3px;
}
</style>
