<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'HomeView',
  components: {
    Inicio
  }
}
</script>
