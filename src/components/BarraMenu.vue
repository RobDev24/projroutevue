<template>
    <div class="navbar">
     <nav class="menu">
    <router-link class="l-home" to="/">Home</router-link> 
    <router-link class="l-about" to="/about">About</router-link>
    <router-link class="l-galeria" to="/galeria">Galeria</router-link>
    <router-link class="l-sobre" to="/sobre">Sobre-nós</router-link>
    <router-link class="l-contato" to="/contato">Contato</router-link>
  </nav>
  
  <nav class="registro">
    <router-link class="l-cadastro" to="/cadastro">Cadastre-se</router-link> 
    <router-link class="l-login" to="/Login">Login</router-link>
  </nav>
  <div class="search">
    <textarea name="" id=""></textarea>
    <button>Pesquisar</button>
  </div>
  
    </div>
</template>

<script>
    export default {
        name: 'BarraMenu'
    }
</script>

<style scoped>
.navbar{
    display: inline-block;
    width: 100%;
    background-color: black;
    
}

.menu{
    width: 40%;
    margin-left: 10px;
    margin-top: 12px;
    margin-bottom: -35px;
    padding: 5px;
    
}

.search{
    border: 1px solid red;
    width: 30%;
    height: 45px;
    float: right;
    margin-top: -3px;
    margin-right: 50px;
    
}

.registro{
    
    float: right;
    margin-right: 10px;
    padding: 15px;

}
.l-home{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-left: -80px;
}
.l-home:hover{
    background-color:#ffff;
    color:black;
    border-radius: 15px;
}
.l-about{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-right: 20px;
}
.l-about:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}
.l-galeria{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-right: 20px;
}
.l-galeria:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}
.l-sobre{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-right: 20px;
}
.l-sobre:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}
.l-contato{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-right: -220px;
}
.l-contato:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}

.l-cadastro{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
    margin-right: 20px;
}
.l-cadastro:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}
.l-login{
   color: aliceblue; 
   text-decoration: none;
   padding: 8px;
   margin-right: 20px;
}
.l-login:hover{
    background-color: aquamarine;
    color:black;
    border-radius: 15px;
}
</style>