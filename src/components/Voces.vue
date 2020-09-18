<template>
  <section>
    <h1>{{ titulo }}</h1>
    <div class="voces-container">
      <Voz
        v-for="(voz,index) in getVoces"
        :voz="voz"
        :key="voz.id"
        @click.native="selectAction(index)"
      >
        <div class="fav-section" @click="favAction(index)">
          <svg viewBox="0 0 457.1 423.3">
            <path
              d="M120 0C53.8 0 0 53.8 0 120c0 134.8 135.9 170.1 228.6 303.3C316.1 290.9 457.1 250.5 457.1 120c0-66.2-53.8-120-120-120-48 0-89.4 28.4-108.6 69.2C209.4 28.4 168 0 120 0z"
            />
          </svg>
        </div>
      </Voz>
    </div>
  </section>
</template>

<script>
import Voz from "./Voz";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Favoritos",
  props: ["titulo"],
  components: { Voz },
  computed: {
    ...mapGetters(["getVoces"]),
  },
  methods: {
    ...mapActions(["favAction", "selectAction"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 35px;
  h1 {
    color: var(--medium);
    font-size: 25px;
    font-size: 2.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      flex: 1;
      margin-left: 2rem;
      height: 2px;
      background-color: #1f1f1f;
    }
    span {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: var(--light);
      color: var(--medium);
      display: block;
      margin-left: 15px;
      position: relative;
      box-shadow: #000000 2px 2px 4px, #4d4d4d -2px -2px 4px;
      font-size: 18px;
      line-height: 35px;
      text-align: center;
    }
  }
  .voces-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }
}
</style>
