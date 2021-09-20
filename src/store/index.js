import Vue from 'vue';
import Vuex from 'vuex';
import leftMenuCollapsed from './leftMenuCollapsed';
import menuRouters from './menuRouters';
import user from './user';
import nowCityList from './nowCityList';
import customerService from './customerService';
import myProjectHistory from './myProjectHistory';
import addProject from './addProject';
import myAddProject from './myAddProject';
import candidate from './candidate';
import certificated from './certificated';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leftMenuCollapsed,
    addProject,
    menuRouters,
    user,
    nowCityList,
    customerService,
    myProjectHistory,
    myAddProject,
    candidate,
    certificated,
  },
  strict: true,
});
