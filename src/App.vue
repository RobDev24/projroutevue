<template>
  <BarraMenu/>
  
  <router-view/>
  <Rodape/>
</template>

<script>
import BarraMenu from './components/BarraMenu.vue';
import Rodape from '@/components/Rodape.vue'

export default {
  name: 'App',
  components:{
    BarraMenu,
    Rodape
  }
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
