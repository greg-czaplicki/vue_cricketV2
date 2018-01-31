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
      pointsPerMark: 0,
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
      roundScore: 0,
      totalScore: 0,
      pointsPerMark: 0,
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
          roundScore: 0,
          totalScore: 0,
          totalDartsThrown: 0,
          currentDartsThrown: 0,
          pointsPerMark: 0,
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
    }
  }
});
