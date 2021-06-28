<template>
    <div class="notfound">
        <h3>404</h3>
        <p>Похоже, что такой странички нет. <router-link to="/" class="return">Вернуться на главную</router-link></p>
        <img src="https://i.pinimg.com/originals/e6/79/21/e679215c2a0185c3ab41ec6ce0c1d085.jpg" alt="sad cat">
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
        .return {
            color: inherit;
        }
        .notfound img{
            display: block;
            width: 50%;
            margin: 0 auto;
        }
</style>
