import Vue from 'vue';
import Vuex from 'vuex';
import leftMenuCollapsed from './leftMenuCollapsed';
import menuRouters from './menuRouters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leftMenuCollapsed,
    menuRouters,
  },
  strict: true,
});
