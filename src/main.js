import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import VuexUndoRedo from './plugins/plugins';

Vue.use(VuexUndoRedo);

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
});
