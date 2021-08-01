import Vue from 'vue';
import Vuex from 'vuex';
import leftMenuCollapsed from './leftMenuCollapsed';
import menuRouters from './menuRouters';
import user from './user';
import nowCityList from './nowCityList';
import customerService from './customerService';
import myProjectHistory from './myProjectHistory';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leftMenuCollapsed,
    menuRouters,
    user,
    nowCityList,
    customerService,
    myProjectHistory,
  },
  strict: true,
});
