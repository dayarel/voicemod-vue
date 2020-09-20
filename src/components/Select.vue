<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{open: open}" @click="open = !open">{{ selected }}</div>
    <div class="items" :class="{selectHide: !open}">
      <template v-if="tipo === 'categorias'">
        <div
          class="item"
          v-for="(opcion, index) of opciones"
          :key="index"
          @click="selected=opcion;open=false;sortingAction(opcion)"
        >{{ opcion }}</div>
      </template>
      <template v-else>
        <div
          class="item"
          v-for="(opcion, index) of opciones"
          :key="index"
          @click="selected=opcion;open=false;alfabeticoAction(opcion)"
        >{{ opcion }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Select",
  props: {
    opciones: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    tipo: "",
  },
  data() {
    return {
      selected: this.opciones.length > 0 ? this.opciones[0] : null,
      open: false,
    };
  },
  methods: {
    ...mapActions(["sortingAction", "alfabeticoAction"]),
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 30px;
  line-height: 30px;
  @media (min-width: 768px) {
    flex: 0 0 125px;
  }
  .selected {
    width: inherit;
    padding-left: 15px;
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 30px;
    line-height: 3rem;
    width: 100%;
    margin-left: 7px;
    background-color: #000;
    border-radius: 3px;
    color: var(--medium);
    cursor: pointer;
    user-select: none;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 7px;
      display: block;
      width: 15px;
      height: 15px;
      background-image: url("../assets/img/chevron.svg");
      background-size: 15px 15px;
      transform: rotate(90deg) translateY(-50%);
      transform-origin: top center;
      transition: all ease-in-out 0.25s;
    }
    &.open {
      &:after {
        transform: rotate(-90deg) translateY(-50%);
      }
    }
  }
  .items {
    color: var(--medium);
    overflow: hidden;
    position: absolute;
    background-color: #000;
    left: 7px;
    right: -7px;
    z-index: 1;
    .item {
      padding-left: 15px;
      cursor: pointer;
      user-select: none;
      border-top: 1px solid var(--dark);
      font-size: 14px;
      font-size: 1.4rem;
      &:hover {
        color: white;
      }
    }
  }
  .selectHide {
    display: none;
  }
}
</style>