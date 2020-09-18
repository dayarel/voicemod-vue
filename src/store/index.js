import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voces: [],
  },
  getters: {
    getVoces(state) {
      return state.voces;
    },
    getFavoritos(state) {
      return state.voces.filter((voz) => voz.favorito);
    },
  },
  mutations: {
    setVoces(state, voces) {
      state.voces = voces;
    },
    setFavoritos(state, index) {
      state.voces[index].favorito = true;
    },
    unsetFavoritos(state, nombre) {
      state.voces.map((voz) => {
        if (voz.id === nombre) {
          voz.favorito = false;
        }
      });
    },
  },
  actions: {
    getDatos({ commit }, voces) {
      commit("setVoces", voces);
    },
    favAction({ commit }, index) {
      commit("setFavoritos", index);
    },
    unfavAction({ commit }, index) {
      commit("unsetFavoritos", index);
    },
  },
});
