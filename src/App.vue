<template>
  <div id="app">
    <navbar/>
<!--    <cards></cards>-->
    <div id="container">
      <router-view></router-view>
    </div>
  <rodapefooter/>
  </div>
</template>

<script>
import HelloWorld from './components/views/HelloWorld.vue'
import paginaLogin from './components/views/paginaLogin'
import paginaIndex from './components/views/paginaIndex'
import navbar from "./components/views/navbar"
import cards from "./components/views/Home.vue"
import rodapefooter from "./components/views/rodapefooter";
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
