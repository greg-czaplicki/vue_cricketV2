import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import VuexUndoRedo from './plugins/plugins';
import Vuetify from 'vuetify';

Vue.use(VuexUndoRedo);
Vue.use(Vuetify);

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
});
