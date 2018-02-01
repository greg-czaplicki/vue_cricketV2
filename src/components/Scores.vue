<template>
  <div class="scoreWrapper">
    <h1>{{ $store.state.player1.totalScore }}</h1>
    <h1>|</h1>
    <h1>{{ $store.state.player2.totalScore }}</h1>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 40px;
  font-weight: 500;
}

.scoreWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
</style>
