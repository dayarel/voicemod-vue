<template>
  <article>
    <div class="voz-container" :class="{faved : voz.favorito}">
      <div class="image-container">
        <img :src="require(`@/assets/img/${voz.icon}`)" :alt="voz.name" />
        <slot></slot>
      </div>

      <p>{{ voz.name }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Voz",
  props: ["voz"],
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 30px;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;

  .voz-container {
    .image-container {
      width: 150px;
      height: 150px;
      background-color: var(--light);
      border-radius: 50%;
      position: relative;
      box-shadow: black 4px 4px 8px, #4d4d4d -4px -4px 8px;
      cursor: pointer;
      transition: all 0.35s ease-in-out;
      &:hover {
        background-color: white;
        .fav-section {
          opacity: 1;
          transform: scale(1);
        }
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .fav-section {
        position: absolute;
        top: 0;
        right: 15px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        opacity: 0;
        transition: all 0.25s ease-in-out;
        svg {
          fill: var(--gray);
          width: 14px;
          height: 14px;
          animation: beating infinite 1s;
        }
      }
    }
    &.faved {
      .image-container {
        background-color: white;
        .fav-section {
          opacity: 1;
          transform: scale(1);
          svg {
            fill: var(--blue);
          }
        }
      }
    }
  }
  p {
    margin-top: 10px;
    text-align: center;
  }

  @keyframes beating {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
