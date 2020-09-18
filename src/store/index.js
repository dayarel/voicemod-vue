import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voces: [],
  },
  mutations: {
    setVoces(state, voces) {
      state.voces = voces;
    },
  },
  actions: {
    getDatos({ commit }, voces) {
      commit("setVoces", voces);
    },
  },
});
