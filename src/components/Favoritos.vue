<template>
  <section>
    <h1>
      {{ titulo }}
      <span v-if="getFavoritos.length">{{getFavoritos.length}}</span>
    </h1>
    <p v-if="getFavoritos.length < 1">It's quite boring up here!. Please try adding some voices</p>
    <div class="voces-container">
      <Voz
        v-for="(voz,index) in getFavoritos"
        :voz="voz"
        :key="voz.id"
        :class="{faved:voz.favorito}"
      >
        <div class="fav-section" @click="unfavAction(voz.id)">
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
import { mapGetters, mapActions } from "vuex";
import Voz from "./Voz";
export default {
  name: "Favoritos",
  props: ["titulo"],
  components: { Voz },
  computed: {
    ...mapGetters(["getFavoritos"]),
  },
  methods: {
    ...mapActions(["unfavAction"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 35px;
  h1 {
    color: var(--medium);
    font-size: 21px;
    font-size: 2.1rem;
    font-weight: 500;
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
      font-size: 1.8rem;
      line-height: 35px;
      font-weight: 700;
      text-align: center;
    }
    & + p {
      margin-top: 30px;

      font-size: 18px;
      font-size: 1.8rem;

      @media (min-width: 768px) {
        font-size: 25px;
        font-size: 2.5rem;
        text-align: center;
      }
    }
  }
  .voces-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(6, 1fr);
    }
    margin-top: 15px;
  }
}
</style>
