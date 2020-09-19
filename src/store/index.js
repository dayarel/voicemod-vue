import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voces: [],
    busqueda: "",
    categorias: [],
    opcion: null,
    sorting: null,
  },
  getters: {
    getVoces(state) {
      let voces = state.voces;
      if (state.busqueda.length > 1) {
        return state.voces.filter((voz) =>
          voz.name.toLowerCase().includes(state.busqueda)
        );
      }
      if (state.opcion != null) {
        return state.voces.filter((voz) => voz.tags[0] === state.opcion);
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
    rellenarCategorias(state) {
      state.voces.map((voz) => {
        state.categorias.indexOf(voz.tags[0]) === -1
          ? state.categorias.push(voz.tags[0])
          : null;
      });
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
    setOpcion(state, opcion) {
      state.opcion = opcion;
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
    categoriasAction({ commit }) {
      commit("rellenarCategorias");
    },
  },
});
