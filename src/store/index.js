import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voces: [],
    busqueda: "",
    categorias: null,
    sorting: null,
  },
  getters: {
    getVoces(state) {
      let voces = state.voces;
      if (state.busqueda.length > 2) {
        return state.voces.filter((voz) =>
          voz.name.toLowerCase().includes(state.busqueda)
        );
      }
      return voces;
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
      state.voces[index].favorito = !state.voces[index].favorito;
    },
    unsetFavoritos(state, nombre) {
      state.voces.map((voz) => {
        if (voz.id === nombre) {
          voz.favorito = false;
        }
      });
    },
    setBusqueda(state, busqueda) {
      state.busqueda = busqueda;
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
    busquedaAction({ comit }, valor) {
      commit("setBusqueda", valor);
    },
  },
});
