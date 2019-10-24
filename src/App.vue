<template>
  <div id="app">

<!--    <pagina-index/>-->
<cabecalho></cabecalho>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cabecalho from './components/cabecalho.vue'
import paginaLogin from  './components/paginaLogin'
import paginaIndex from './components/paginaIndex'

export default {
  name: 'app',
  components: {
    HelloWorld,
    cabecalho,
    paginaLogin,
    paginaIndex

  }
}
</script>

<style>
</style>
