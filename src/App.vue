<template>
  <nav-bar></nav-bar>
  <router-view />
  <footer-bar></footer-bar>
</template>

<script>
import NavBar from '@/components/controle-de-visitas/historico-de-visitas/NavBar.vue'
import FooterBar from '@/components/controle-de-visitas/historico-de-visitas/FooterBar.vue'

export default {

  components: {
    'nav-bar' : NavBar,
    'footer-bar' : FooterBar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
  min-height: 100vh;
}
</style>
