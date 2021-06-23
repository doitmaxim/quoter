<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                Quoter
            </a>

            <div
                class="create-btn"
                @click="showModal({
                    componentName: 'QuoteCreateModal', 
                    title: 'Создание записи'})"
            >
                Добавить цитату
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        showModal(data) {
            this.$store.commit('modal/showModal', data)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../sass/_variables.scss';
.create-btn {
    padding: 7px 25px;
    border-radius: 25px;
    background-color: $black;
    color: #fff;
}
</style>