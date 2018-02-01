import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Cricket Scorer',
    gameInProgress: true,
    player1: {
      name: 'Player 1',
      isActive: true,
      totalScore: 0,
      closed: {
        twenty: 0,
        nineteen: 0,
        eighteen: 0,
        seventeen: 0,
        sixteen: 0,
        fifteen: 0,
        bull: 0
      },
      segments: {
        twenty: 0,
        nineteen: 0,
        eighteen: 0,
        seventeen: 0,
        sixteen: 0,
        fifteen: 0,
        bull: 0
      }
    },
    player2: {
      name: 'Player 2',
      isActive: false,
      totalScore: 0,
      closed: {
        twenty: 0,
        nineteen: 0,
        eighteen: 0,
        seventeen: 0,
        sixteen: 0,
        fifteen: 0,
        bull: 0
      },
      segments: {
        twenty: 0,
        nineteen: 0,
        eighteen: 0,
        seventeen: 0,
        sixteen: 0,
        fifteen: 0,
        bull: 0
      }
    }
  },
  getters: {
    player1Score(state) {
      return state.player1.segments;
    },
    player2Score(state) {
      return state.player2.segments;
    },
    player1Closed(state) {
      return state.player1.closed;
    },
    player2Closed(state) {
      return state.player2.closed;
    },
    checkWinner(state) {
      let p1allTrue = Object.keys(state.player1.closed).every(function(k) {
        return state.player1.closed[k] === 3;
      });
      let p2allTrue = Object.keys(state.player2.closed).every(function(k) {
        return state.player2.closed[k] === 3;
      });

      if (
        (p1allTrue && state.player2.totalScore === 0) ||
        (p1allTrue && state.player1.totalScore >= state.player2.totalScore)
      ) {
        state.gameInProgress = false;
        alert('Player 1 Wins!');
      }

      if (
        (p2allTrue && state.player1.totalScore === 0) ||
        (p2allTrue && state.player2.totalScore >= state.player1.totalScore)
      ) {
        state.gameInProgress = false;
        alert('Player 2 Wins!');
      }
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
          totalScore: 0,
          closed: {
            twenty: 0,
            nineteen: 0,
            eighteen: 0,
            seventeen: 0,
            sixteen: 0,
            fifteen: 0,
            bull: 0
          },
          segments: {
            twenty: 0,
            nineteen: 0,
            eighteen: 0,
            seventeen: 0,
            sixteen: 0,
            fifteen: 0,
            bull: 0
          }
        },
        player2: {
          name: 'Player_2',
          isActive: false,
          totalScore: 0,
          closed: {
            twenty: 0,
            nineteen: 0,
            eighteen: 0,
            seventeen: 0,
            sixteen: 0,
            fifteen: 0,
            bull: 0
          },
          segments: {
            twenty: 0,
            nineteen: 0,
            eighteen: 0,
            seventeen: 0,
            sixteen: 0,
            fifteen: 0,
            bull: 0
          }
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
      if (
        state.player1.isActive &&
        state.player2.closed[payload.segment] < 3 &&
        state.player1.closed[payload.segment] === 3
      ) {
        state.player1.totalScore += payload.points;
        state.player1.segments[payload.segment] += payload.points;
      } else if (state.player1.isActive && state.player1.closed[payload.segment] < 3) {
        state.player1.closed[payload.segment] += 1;
      }

      if (
        state.player2.isActive &&
        state.player1.closed[payload.segment] < 3 &&
        state.player2.closed[payload.segment] === 3
      ) {
        state.player2.totalScore += payload.points;
        state.player2.segments[payload.segment] += payload.points;
      } else if (state.player2.isActive && state.player2.closed[payload.segment] < 3) {
        state.player2.closed[payload.segment] += 1;
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
    },
    segmentOpen(context, payload) {
      context.commit('segmentOpen', payload);
    }
  }
});
