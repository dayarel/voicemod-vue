<template>
  <section>
    <h1>{{ titulo }}</h1>
    <div class="voces-container"></div>
  </section>
</template>

<script>
import Voz from "./Voz";
export default {
  name: "Voces",
  props: ["titulo"],
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
