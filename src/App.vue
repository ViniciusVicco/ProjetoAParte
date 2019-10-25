<template>
  <div id="app">
    <navbar></navbar>
    <pagina-index/>
    <cards></cards>
    <rodapefooter></rodapefooter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import paginaLogin from  './components/paginaLogin'
import paginaIndex from './components/paginaIndex'
import navbar from "./components/navbar"
import cards from "./components/cards.vue"
import rodapefooter from "./components/rodapefooter";
export default {
  name: 'app',
  components: {
    HelloWorld,
    paginaLogin,
    paginaIndex,
    navbar,
    cards,
    rodapefooter

  }
}
</script>

<style>
</style>
