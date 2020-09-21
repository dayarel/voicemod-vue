import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voces: [],
    busqueda: "",
    categorias: [""],
    opcion: "",
    sorting: "popular",
    random: -1,
  },
  getters: {
    getVoces(state) {
      let filtroVoces = state.voces.slice();
      if (state.busqueda.length > 0) {
        filtroVoces = filtroVoces.filter((voz) =>
          voz.name.toLowerCase().includes(state.busqueda)
        );
      }

      if (state.opcion !== "") {
        filtroVoces = filtroVoces.filter((voz) => voz.tags[0] === state.opcion);
      }

      if (
        state.sorting === "A-Z" ||
        state.sorting.toLowerCase() === "popular"
      ) {
        filtroVoces.sort((b, a) => {
          const vozA = a.name.trim("").toLowerCase(),
            vozB = b.name.trim("").toLowerCase();
          if (vozA < vozB)
            //sort string ascending
            return 1;
          if (vozA > vozB) return -1;
          return 0;
        });
      } else {
        filtroVoces.sort((b, a) => {
          const vozA = a.name.trim("").toLowerCase(),
            vozB = b.name.trim("").toLowerCase();
          if (vozA < vozB) return -1;
          if (vozA > vozB) return 1;
          return 0;
        });
      }
      if (state.random >= 0) {
        filtroVoces = state.voces.filter(
          (voz) => voz.id === state.voces[state.random].id
        );
      }
      // Devuelve la array que cumple todos los requisitos;

      return filtroVoces;
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
      let categoriasTemp = [];
      state.voces.map((voz) => {
        if (categoriasTemp.indexOf(voz.tags[0]) === -1) {
          categoriasTemp.push(voz.tags[0]);
        }
      });
      categoriasTemp.map((categoria) => {
        const cat =
          categoria.charAt(0).toUpperCase() + categoria.substr(1).toLowerCase();
        state.categorias.push(cat);
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
    setSeleccionado(state, index) {
      state.voces[index].seleccionado = !state.voces[index].seleccionado;
    },
    setBusqueda(state, busqueda) {
      state.busqueda = busqueda;
    },
    resetBusqueda(state) {
      state.busqueda = "";
    },
    setCategoria(state, opcion) {
      if (opcion.toLowerCase() === "all") {
        state.random = -1;
        state.opcion = "";
      } else {
        state.opcion = opcion.toLowerCase();
      }
    },
    setAlfabetico(state, opcion) {
      state.sorting = opcion;
    },
    setRandom(state, number) {
      state.random = number;
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
    randomAction({ commit, state }) {
      const random = Math.floor(Math.random() * state.voces.length);
      commit("setRandom", random);
    },
    resetAction({ commit }) {
      commit("resetBusqueda");
    },
    sortingAction({ commit }, opcion) {
      commit("setCategoria", opcion);
    },
    alfabeticoAction({ commit }, opcion) {
      commit("setAlfabetico", opcion);
    },
    seleccionadoAction({ commit }, index) {
      commit("setSeleccionado", index);
    },
  },
});
