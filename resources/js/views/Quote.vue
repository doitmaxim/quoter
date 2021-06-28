<template>
    <div class="quote-page bg-white">
        <pre-loader v-if="!isLoaded"/>
        <div class="quote-content" v-else="isLoaded">
            <div class="title"><b>Цитата:</b></div>
            <div class="content">
                {{quoteInfo.quote_text}}
            </div>
            <div class="title"><b>Автор:</b></div>
            <div class="content">
                {{quoteInfo.author}}
            </div>
            <div class="title"><b>Дата публикации:</b></div>
            <div class="content">
                {{quoteInfo.formatted_date}}
            </div>
            <div class="title"><b>Теги:</b></div>
            <div class="content">
                <small v-for="tag in quoteInfo.tags" :key="tag.id" class="tag">
                    {{tag.tag_name}}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import Api from '../service/api';
import PreLoader from "../components/PreLoader";
export default {
    data() {
        return {
            quoteInfo: {},
            isLoaded: false
        }
    },
    components: {
        PreLoader
    },
    methods: {
        loadInfo() {
            Api().get('/quotes/'+this.$route.params.id)
                .then( response => {
                    this.isLoaded = true;
                    return this.quoteInfo = response.data
                })
                .catch( error => {
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'NotFound' })
                    }
                })
        }
    },
    mounted() {
        this.loadInfo();
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';
.quote-page {
    padding: 30px;
}
.content {
    margin-bottom: 15px;
}
.tag {
    border: 1px solid $black;
    padding: 3px 10px;
    border-radius: 15px;
    margin-right: 5px;
    @media (max-width: $tablet-width) {
        margin: 0 5px 5px 5px;
    }
}
</style>
