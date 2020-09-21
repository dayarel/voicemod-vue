<template>
  <div id="app">
    <Header />
    <main>
      <Favoritos titulo="FAVORITE VOICES" />
      <Voces titulo="PRO VOICES" />
    </main>
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
    ...mapActions(["getDatos", "categoriasAction"]),
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
        })
        .then((res) => this.categoriasAction());
    },
  },
  mounted() {
    this.getJson();
  },
};
</script>

<style lang="scss">
#app {
  margin: 125px auto 0;
  width: 90%;
  max-width: 1140px;
  @media (min-width: 768px) {
    margin: 85px auto 0;
  }
}
</style>
