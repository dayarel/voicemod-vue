<template>
  <form>
    <div class="form-wrapper">
      <div class="search-panel">
        <input type="text" v-model="busqueda" />
        <button @click.prevent="resetAction">X</button>
      </div>

      <div class="sort-group">
        <div class="select-container">
          <div>
            <img src="@/assets/img/filter.svg" alt="Filter icon" />
            <div class="custom-dropdown">
              <Select :opciones="['All',...categorias]" tipo="categorias" />
            </div>
          </div>
          <div>
            <img src="@/assets/img/order.svg" alt />
            <div class="custom-dropdown">
              <Select :opciones="['Popular','A-Z','Z-A']" tipo="alfabetico" />
            </div>
          </div>
        </div>
        <button type="button" @click="randomAction">Random</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Select from "./Select";
export default {
  name: "Header",
  components: { Select },
  computed: {
    ...mapState(["categorias"]),
    busqueda: {
      get() {
        return this.$store.state.busqueda;
      },
      set(valor) {
        this.$store.commit("setBusqueda", valor);
      },
    },
  },
  methods: {
    ...mapActions(["randomAction", "resetAction"]),
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: var(--dark);
  padding: 15px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.55);
  .form-wrapper {
    width: 90%;
    max-width: 1140px;
    margin: 0 auto;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    select,
    input {
      background-color: #000;
      color: var(--medium);
      height: 30px;
      border: none;
      line-height: 30px;
      line-height: 3rem;
    }
    .search-panel {
      position: relative;
      flex: 0 1 245px;
      input {
        border-radius: 25px;
        background: #000 url("../assets/img/search.svg") no-repeat left center;
        padding: 0 35px 0 55px;
        width: 100%;
        color: white;
        font-size: 16px;
        font-size: 1.6rem;
      }
      button {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        border: 0;
        background: transparent;
        color: white;
        font-size: 18px;
        font-size: 1.8rem;
        padding: 0;
        margin: 0;
      }
    }
    .sort-group {
      display: flex;
      flex-wrap: nowrap;
      flex: 0 1 415px;
      margin-top: 15px;
      justify-content: space-between;
      height: 30px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
      .select-container {
        display: flex;
        flex: 1 1 165px;
        &:not(:first-of-type) {
          margin-left: 25px;
        }
        & > div {
          display: flex;
          flex: 1 1 165px;
          &:not(:first-of-type) {
            margin-left: 25px;
          }
          .custom-dropdown {
            width: 100%;
            @media (min-width: 768px) {
              flex: 0 0 125px;
            }
            select {
              width: inherit;
              padding-left: 15px;
              font-size: 16px;
              font-size: 1.6rem;
              width: 100%;
              margin-left: 7px;
              background-color: #000;
              border-radius: 3px;
            }
          }
        }
      }
      button {
        margin-left: 25px;
        display: block;
        border: none;
        width: 30px;
        height: 30px;
        background: transparent url("../assets/img/button-random.svg");
        background-size: cover;
        text-indent: -99999px;
        cursor: pointer;
      }
    }
  }
}
</style>
