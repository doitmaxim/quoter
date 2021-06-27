<template>
    <div class="quote-page">
        <div class="title"><b>Цитата</b></div>
        <div class="quote">
            {{quoteInfo.quote_text}}
        </div>
        <div class="title"><b>Автор:</b></div>
        <div class="autor">
            {{quoteInfo.author}}
        </div>
        <div class="title"><b>Дата публикации:</b></div>
        <div class="date">
            {{quoteInfo.formatted_date}}
        </div>
        <div class="title"><b>Теги:</b></div>
        <div class="tags">
            <small v-for="tag in quoteInfo.tags" :key="tag.id" class="tag">
                {{tag.tag_name}}
            </small>
        </div>
    </div>
</template>
<script>
import Api from '../service/api';
export default {
    data() {
        return {
            quoteInfo: {}
        }
    },
    methods: {
        loadInfo() {
            Api().get('/quotes/'+this.$route.params.id)
                .then( response => {
                    return this.quoteInfo = response.data
                })
                .catch( error => {
                    if (error.response.status == 404) {
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
