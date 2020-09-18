<template>
  <form>
    <input type="text" v-model="search" />
    <div class="sort-group">
      <div>
        <img src="@/assets/img/filter.svg" alt="Filter icon" />
        <div class="custom-dropdown">
          <select name="categories" id="categories">
            <option value="null">All</option>
          </select>
        </div>
      </div>
      <div>
        <img src="@/assets/img/order.svg" alt />
        <div class="custom-dropdown">
          <select name="sorting" id="sorting">
            <option value="null">Popular</option>
            <option value="desc">A-Z</option>
            <option value="asc">Z-A</option>
          </select>
        </div>
      </div>
      <button type="button">Random</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  margin-top: 15px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  select,
  input {
    color: var(--medium);
    height: 35px;
    color: var(--medium);
    border: none;
  }
  input {
    border-radius: 25px;
    background: #000 url("../assets/img/search.svg") no-repeat left center;
    padding-left: 35px;
    width: 100%;
    flex: 0 1 250px;
  }
  .sort-group {
    display: flex;
    flex: 0 1 350px;
    margin-top: 25px;
    justify-content: space-between;
    @media (min-width: 768px) {
      margin-top: 0;
    }

    & > div {
      display: flex;
      flex: 1 1 auto;
      &:not(:first-of-type) {
        margin-left: 25px;
      }
      .custom-dropdown {
        width: 100%;
        position: relative;
        select {
          width: 100%;
          margin-left: 7px;
          background-color: #000;
          border-radius: 3px;
        }
      }
    }

    button {
      margin-left: 25px;
      display: block;
      border: none;
      width: 35px;
      height: 35px;
      background: transparent url("../assets/img/button-random.svg");
      background-size: cover;
      text-indent: -99999px;
      cursor: pointer;
    }
  }
}
</style>
