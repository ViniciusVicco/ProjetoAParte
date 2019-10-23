<template>
  <div id="app">
    <nome/>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import nome from './components/cabecalho.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    nome

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
