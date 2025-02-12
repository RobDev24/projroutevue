<template>
    <div>
        <h1>Os carros do futuro</h1>
        <p>Os carros  mais futuristas com design arrojados com detalhes que impressionam qualquer pessoa

        </p>
        <img src="@/assets/mini1comp.jpg" alt="">

        

    </div>


</template>

<script>
    export default {
        name: 'IniciO'
    }
</script>

<style scoped>
img{
    display: block;
    margin-top: 20px;
    padding: 60px; 
    border: 1px solid red;  
}
h1{
    float: right;
    margin-top: 30px;
    margin-right: 250px;
    color: aliceblue;
}
p{
    display: flex;
    float: right;
    margin-top: 90px;
    margin-right:-500px ;
    width: 50%;
    padding: 15px;
    color: aliceblue;
    border: 1px solid red;
}
</style>