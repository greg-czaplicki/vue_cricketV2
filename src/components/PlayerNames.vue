<template>
  <div id="container">
    <h1 id="player1">Player 1</h1>
    <h2 id="vs">VS.</h2>
    <h1 id="player2">Player 2</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
  justify-items: center;
}

#player1 {
  grid-column: 2;
}

#vs {
  align-self: center;
}
</style>
