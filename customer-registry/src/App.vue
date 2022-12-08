<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  background-color: $primitives-purple-3;
  font-family: "Nunito Sans", sans-serif;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
