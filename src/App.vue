<template>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(111, 121, 255)), linear-gradient(to right, rgba(255, 0, 100, .3), rgba(255, 100, 127, .2)), linear-gradient(to top right, yellow, rgba(0, 0, 0, 0)), radial-gradient(closest-corner at 20% 80%, yellow, red);
  /* https://stackoverflow.com/questions/39360021/css-crazy-gradient */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  overflow: hidden;
}
</style>
