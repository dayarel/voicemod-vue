<template>
  <div id="app">
    <Header />
    <Favoritos titulo="FAVORITE VOICES" />
    <Voces titulo="PRO VOICES" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Favoritos from "./components/Favoritos";
import Voces from "./components/Voces";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Favoritos,
    Voces,
  },
  methods: {
    ...mapActions(["getDatos"]),
    getJson() {
      fetch("voices.json")
        .then((res) => res.json())
        .then((res) => {
          const voces = res.map((voz) => {
            return {
              ...voz,
              favorito: false,
              seleccionado: false,
            };
          });
          this.getDatos(voces);
        });
    },
  },
  mounted() {
    this.getJson();
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 20px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
}
</style>
