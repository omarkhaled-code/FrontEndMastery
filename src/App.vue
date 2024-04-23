<template>
  <router-view :key="$route.fullPath" />
  <div class="so-small-screen">
    <p>sorry but your screen is so small can you open this in large screen</p>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .so-small-screen {
    display: none;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 5px;
    &.router-link-exact-active,
    &:hover {
      color: #ff6600;
    }
  }
}
</style>
