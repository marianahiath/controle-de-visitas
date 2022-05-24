<template>
  <nav class="mb-5">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- <div class="is-flex">
    <div class="cor"></div>
  </div> -->
    <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
}

nav {
  padding: 20px;
  background: #fff;
  box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
}

nav a {
  font-weight: bold;
  color: #1d72aa;
}

nav a.router-link-exact-active {
  color: 	#0d3753;
}

  .cor {
    width: 250px;
    height: 100vh;
    background: #0d3753;
    box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
  }

</style>
