import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Cricket Scorer',
    gameInProgess: true,
    player1: {
      name: 'Player_1',
      isActive: true,
      roundScore: 0,
      totalScore: 0,
      totalDartsThrown: 0,
      currentDartsThrown: 0,
      pointsPerMark: 0,
      twenty: 0,
      nineteen: 0,
      eighteen: 0,
      seventeen: 0,
      sixteen: 0,
      fifteen: 0,
      bull: 0
    },
    player2: {
      name: 'Player_2',
      isActive: false,
      roundScore: 0,
      totalScore: 0,
      totalDartsThrown: 0,
      currentDartsThrown: 0,
      pointsPerMark: 0,
      twenty: 0,
      nineteen: 0,
      eighteen: 0,
      seventeen: 0,
      sixteen: 0,
      fifteen: 0,
      bull: 0
    }
  },
  getters: {
    player1Score(state) {
      return state.player1;
    },
    player2Score(state) {
      return state.player2;
    }
  },
  mutations: {
    emptyState() {
      this.replaceState({
        title: 'Cricket Scorer',
        gameInProgess: true,
        player1: {
          name: 'Player_1',
          isActive: true,
          roundScore: 0,
          totalScore: 0,
          totalDartsThrown: 0,
          currentDartsThrown: 0,
          pointsPerMark: 0,
          twenty: 0,
          nineteen: 0,
          eighteen: 0,
          seventeen: 0,
          sixteen: 0,
          fifteen: 0,
          bull: 0
        },
        player2: {
          name: 'Player_2',
          isActive: false,
          roundScore: 0,
          totalScore: 0,
          totalDartsThrown: 0,
          currentDartsThrown: 0,
          pointsPerMark: 0,
          twenty: 0,
          nineteen: 0,
          eighteen: 0,
          seventeen: 0,
          sixteen: 0,
          fifteen: 0,
          bull: 0
        }
      });
    },
    togglePlayer1(state) {
      if (state.player1.isActive === false) {
        state.player1.isActive = true;
        state.player2.isActive = false;
      }
    },
    togglePlayer2(state) {
      if (state.player2.isActive === false) {
        state.player2.isActive = true;
        state.player1.isActive = false;
      }
    },
    scoreSegment(state, payload) {
      if (state.player1.isActive) {
        state.player1[payload.segment] += payload.points;
      }

      if (state.player2.isActive) {
        state.player2[payload.segment] += payload.points;
      }
    }
  },
  actions: {
    togglePlayer1(context) {
      context.commit('togglePlayer1');
    },
    togglePlayer2(context) {
      context.commit('togglePlayer2');
    },
    scoreSegment(context, payload) {
      context.commit('scoreSegment', payload);
    }
  }
});
