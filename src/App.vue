<template>
  <div id="app">
    <navbar></navbar>
    <pagina-index/>
<!--    <cards></cards>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import paginaLogin from  './components/paginaLogin'
import paginaIndex from './components/paginaIndex'
import navbar from "./components/navbar";
// import cards from "./components/cards";
export default {
  name: 'app',
  components: {
    HelloWorld,
    paginaLogin,
    paginaIndex,
    navbar,
    // cards

  }
}
</script>

<style>
</style>
